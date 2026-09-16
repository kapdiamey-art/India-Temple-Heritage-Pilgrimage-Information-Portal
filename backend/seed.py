import json
import sys
from pathlib import Path

# Ensure backend root directory is in sys.path
BASE_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(BASE_DIR))

from pydantic import ValidationError
from sqlalchemy import func
from app.database import SessionLocal, init_db
from app.models.temple import Temple
from app.schemas.temple import TempleCreate


DATA_FILE = BASE_DIR / "data" / "temples.json"


def seed_temples(data_filepath: Path = DATA_FILE):
    """
    Reads temple records from JSON file, validates schema, prevents duplicates,
    and inserts non-duplicate records into PostgreSQL database.
    """
    print("=" * 60)
    print("Temple Data Import / Seed Tool")
    print("=" * 60)

    # 1. Initialize database tables safely
    init_db()

    if not data_filepath.exists():
        print(f"[ERROR] Data file not found at: {data_filepath}")
        return

    # 2. Read JSON data
    try:
        with open(data_filepath, "r", encoding="utf-8") as f:
            raw_records = json.load(f)
    except json.JSONDecodeError as exc:
        print(f"[ERROR] Invalid JSON in data file ({data_filepath}): {exc}")
        return

    if not isinstance(raw_records, list):
        print(f"[ERROR] Expected JSON list of temple objects in {data_filepath}")
        return

    total_count = len(raw_records)
    print(f"[INFO] Found {total_count} record(s) in {data_filepath.name}")

    if total_count == 0:
        print("[INFO] No records to process. `temples.json` is empty.")
        print("=" * 60)
        return

    inserted_count = 0
    skipped_count = 0
    invalid_count = 0

    db = SessionLocal()
    try:
        for idx, item in enumerate(raw_records, start=1):
            name = item.get("name", "<Unnamed>")
            city = item.get("city", "<No City>")

            # Validate against Pydantic schema
            try:
                validated_data = TempleCreate(**item)
            except ValidationError as val_err:
                invalid_count += 1
                print(f"[SKIP - INVALID] Item #{idx} ({name}): Validation failed -> {val_err.errors()}")
                continue

            # Duplicate check: check if record with same name, city, state exists
            existing_temple = (
                db.query(Temple)
                .filter(
                    func.lower(Temple.name) == validated_data.name.lower(),
                    func.lower(Temple.city) == validated_data.city.lower(),
                    func.lower(Temple.state) == validated_data.state.lower(),
                )
                .first()
            )

            if existing_temple:
                skipped_count += 1
                print(f"[SKIP - DUPLICATE] '{validated_data.name}' in {validated_data.city}, {validated_data.state} already exists (ID: {existing_temple.id}).")
                continue

            # Insert new record
            new_temple = Temple(**validated_data.model_dump())
            db.add(new_temple)
            db.commit()
            db.refresh(new_temple)
            inserted_count += 1
            print(f"[INSERTED] Added '{new_temple.name}' (ID: {new_temple.id}) in {new_temple.city}, {new_temple.state}.")

        print("-" * 60)
        print("Import Summary:")
        print(f"  - Total records evaluated : {total_count}")
        print(f"  - Successfully inserted   : {inserted_count}")
        print(f"  - Skipped (duplicates)    : {skipped_count}")
        print(f"  - Invalid / Failed        : {invalid_count}")
        print("=" * 60)

    except Exception as exc:
        db.rollback()
        print(f"[ERROR] Import aborted due to database error: {exc}")
    finally:
        db.close()


if __name__ == "__main__":
    seed_temples()
