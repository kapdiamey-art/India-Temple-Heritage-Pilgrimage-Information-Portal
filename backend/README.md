# Temple Heritage Backend

This backend is a minimal FastAPI skeleton for the Temple Heritage portal.

## Structure

- `app/main.py` contains the FastAPI application and health endpoint.
- `app/routes/` is reserved for API route modules.
- `app/models/` is reserved for future data models.
- `app/schemas/` is reserved for request and response schemas.
- `app/services/` is reserved for business logic services.

## Run

Create and activate a virtual environment, then install dependencies:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The health endpoint is available at:

http://localhost:8000/api/health
