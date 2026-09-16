import os
from dotenv import load_dotenv
from sqlalchemy import create_engine, text
from sqlalchemy.orm import declarative_base, sessionmaker

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise RuntimeError("DATABASE_URL is not set. Add it to the backend/.env file.")

engine = create_engine(DATABASE_URL, pool_pre_ping=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def init_db():
    """Create all database tables for development using SQLAlchemy metadata."""
    try:
        import app.models  # noqa: F401 - ensure models register on Base.metadata
        with engine.begin() as connection:
            connection.execute(text("SELECT 1"))
            Base.metadata.create_all(bind=connection)
            connection.execute(text("ALTER TABLE temples ADD COLUMN IF NOT EXISTS source_name VARCHAR(200);"))
            connection.execute(text("ALTER TABLE temples ADD COLUMN IF NOT EXISTS source_url VARCHAR(500);"))
            connection.execute(text("ALTER TABLE temples ADD COLUMN IF NOT EXISTS last_verified_at VARCHAR(50);"))
    except Exception as exc:
        raise RuntimeError(f"Database initialization failed: {exc}") from exc



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
