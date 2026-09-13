from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.temple import Temple
from app.schemas.temple import TempleRead

router = APIRouter(prefix="/temples", tags=["temples"])


@router.get("", response_model=List[TempleRead])
@router.get("/", response_model=List[TempleRead], include_in_schema=False)
def get_temples(db: Session = Depends(get_db)):
    """Retrieve all temples from PostgreSQL database."""
    temples = db.query(Temple).all()
    return temples


@router.get("/{temple_id}", response_model=TempleRead)
def get_temple(temple_id: int, db: Session = Depends(get_db)):
    """Retrieve a single temple by its primary key ID."""
    temple = db.query(Temple).filter(Temple.id == temple_id).first()
    if not temple:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Temple not found",
        )
    return temple
