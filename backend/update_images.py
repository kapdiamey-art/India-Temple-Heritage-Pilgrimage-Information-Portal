"""
One-shot script to update image URLs in the database from the temples.json file.
Run this once to fix images already in Neon PostgreSQL.
"""
import json
import sys
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(BASE_DIR))

from app.database import SessionLocal
from app.models.temple import Temple

DATA_FILE = BASE_DIR / "data" / "temples.json"


def update_images():
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        records = json.load(f)

    # Build a name -> image map from JSON
    image_map = {r["name"].strip().lower(): r["image"] for r in records if r.get("image")}

    db = SessionLocal()
    try:
        temples = db.query(Temple).all()
        updated = 0
        for temple in temples:
            new_image = image_map.get(temple.name.strip().lower())
            if new_image and temple.image != new_image:
                print(f"  Updating image for '{temple.name}' (ID {temple.id})")
                temple.image = new_image
                updated += 1

        db.commit()
        print(f"\n Updated {updated}/{len(temples)} temple image(s) in the database.")
    except Exception as exc:
        db.rollback()
        print(f"Error: {exc}")
    finally:
        db.close()


if __name__ == "__main__":
    update_images()
