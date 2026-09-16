from typing import Optional, List
from pydantic import BaseModel, ConfigDict


class TempleBase(BaseModel):
    name: str
    city: str
    state: str
    deity: str
    image: Optional[str] = None
    short_description: str
    historical_background: str
    religious_cultural_significance: str
    darshan_timings: List[str] = []
    daily_rituals: List[str] = []
    festivals: List[str] = []
    dress_code: str
    visitor_guidelines: str
    best_time_to_visit: str
    facilities: List[str] = []
    location_information: str
    source_name: Optional[str] = None
    source_url: Optional[str] = None
    last_verified_at: Optional[str] = None



class TempleCreate(TempleBase):
    pass


class TempleRead(TempleBase):
    id: int

    model_config = ConfigDict(from_attributes=True)

