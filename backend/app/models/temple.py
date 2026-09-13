from sqlalchemy import Column, Integer, String, Text, JSON
from app.database import Base


class Temple(Base):
    __tablename__ = "temples"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(150), nullable=False, index=True)
    city = Column(String(100), nullable=False)
    state = Column(String(100), nullable=False)
    deity = Column(String(120), nullable=False)
    image = Column(String(500), nullable=True)
    short_description = Column(Text, nullable=False)
    historical_background = Column(Text, nullable=False)
    religious_cultural_significance = Column(Text, nullable=False)
    darshan_timings = Column(JSON, nullable=False, default=list)
    daily_rituals = Column(JSON, nullable=False, default=list)
    festivals = Column(JSON, nullable=False, default=list)
    dress_code = Column(Text, nullable=False)
    visitor_guidelines = Column(Text, nullable=False)
    best_time_to_visit = Column(Text, nullable=False)
    facilities = Column(JSON, nullable=False, default=list)
    location_information = Column(Text, nullable=False)
