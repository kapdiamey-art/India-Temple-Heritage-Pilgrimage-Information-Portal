# Dharohar Bharat — Temple Heritage & Pilgrimage Information Portal

A full-stack, mobile-responsive web portal providing accurate, source-tracked information on Indian sacred temples, architectural history, rituals, darshan schedules, festivals, and pilgrimage routes.

---

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite, React Router v6, Lucide React Icons, Vanilla CSS Design System
- **Backend**: Python 3, FastAPI, SQLAlchemy ORM, Pydantic v2, Uvicorn
- **Database**: PostgreSQL
- **Data Source**: Authentic public knowledge records (Archaeology Survey of India, Ministry of Tourism, UNESCO, and Wikimedia Commons)

---

## ✨ Features

- **Live Temple Directory**: Real-time keyword search across names, cities, and states with multi-filter options by State and Deity.
- **Rich Temple Details**: Comprehensive historical background, religious significance, darshan schedules, daily rituals, festivals, visitor dress codes, guidelines, and facilities.
- **Data Provenance Tracking**: Internal tracking of data sources (`source_name`, `source_url`, `last_verified_at`) displayed on temple detail pages.
- **Automated Database Seeding**: Safe, duplicate-resistant database seed tool (`seed.py`) to import JSON datasets into PostgreSQL.
- **Mobile Responsive**: Fully responsive layout optimized for smartphones, tablets, and desktops.

---

## 📋 Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js**: v18.0.0 or higher
- **Python**: 3.10 or higher
- **PostgreSQL**: Running instance (Local or Remote)

---

## 🚀 Step-by-Step Setup & Execution

### 1. Database Setup

Create a PostgreSQL database (e.g. `temple_db`):

```sql
CREATE DATABASE temple_db;
```

In the `backend/` folder, create a `.env` file with your PostgreSQL connection string:

```env
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/temple_db
```

---

### 2. Backend Setup & Data Seeding

Open a terminal in the `backend` directory:

```bash
cd backend
```

#### Create Virtual Environment & Install Dependencies:
```bash
# Windows
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt

# Linux / macOS
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

#### Seed PostgreSQL Database with Verified Temple Records:
```bash
# Windows
.venv\Scripts\python seed.py

# Linux / macOS
python seed.py
```

#### Launch FastAPI Backend Server:
```bash
# Windows
.venv\Scripts\python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload

# Linux / macOS
uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```

The backend server will run at: **`http://127.0.0.1:8000`**  
Interactive API Documentation (Swagger UI): **`http://127.0.0.1:8000/docs`**

---

### 3. Frontend Setup & Running

Open a second terminal in the `frontend` directory:

```bash
cd frontend
```

#### Install Dependencies:
```bash
npm install
```

#### Start Vite Development Server:
```bash
npm run dev
```

The frontend application will launch at: **`http://localhost:5173`**

---

## 🔌 API Endpoints Summary

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Backend status health check |
| `GET` | `/api/temples` | Retrieve all temples from PostgreSQL database |
| `GET` | `/api/temples/{id}` | Retrieve single temple details by primary key ID |

---

## 📁 Repository Structure

```text
India-Temple-Heritage-Pilgrimage-Information-Portal/
├── backend/
│   ├── app/
│   │   ├── models/
│   │   │   └── temple.py
│   │   ├── routes/
│   │   │   └── temples.py
│   │   ├── schemas/
│   │   │   └── temple.py
│   │   ├── database.py
│   │   └── main.py
│   ├── data/
│   │   └── temples.json
│   ├── seed.py
│   ├── requirements.txt
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Temples.jsx
│   │   │   └── TempleDetails.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```
