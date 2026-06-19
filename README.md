# Portfolio Template

A full-stack portfolio website template with **React + Vite** frontend and **FastAPI + MongoDB** backend.

Built by [Moh Shahrukh Khan](https://github.com/MohShahrukhKhan).

---

## Tech Stack

| Layer     | Technology                                                     |
| --------- | -------------------------------------------------------------- |
| Frontend  | React 18, Vite, Tailwind CSS, Framer Motion, Recharts          |
| Backend   | Python 3.9+, FastAPI, Motor (async MongoDB driver)             |
| Database  | MongoDB 8.0 (local) or MongoDB Atlas (cloud)                   |
| Email     | SendGrid (optional — for contact form notifications)           |
| Deploy    | GitHub Actions → GitHub Pages (frontend)                       |

---

## Quick Start

### Prerequisites

- Node.js 18+ & npm
- Python 3.9+
- MongoDB 8.0+

### Setup

```bash
# Clone
git clone https://github.com/your-username/portfolio-template.git
cd portfolio-template

# Frontend
cd frontend && npm install && cd ..

# Backend
cd backend && pip3 install -r requirements.txt && cd ..

# Backend env
cat > backend/.env <<EOF
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio
CORS_ORIGINS=http://localhost:5173
EOF

# Frontend env
cat > frontend/.env <<EOF
VITE_BACKEND_URL=http://localhost:8001
EOF
```

### Run

```bash
# Terminal 1 — Backend
cd backend && python3 -m uvicorn server:app --host 0.0.0.0 --port 8001 --reload

# Terminal 2 — Frontend
cd frontend && npm run dev
```

Open **http://localhost:5173**

### Stop Services

```bash
kill $(lsof -ti :5173) 2>/dev/null   # Stop frontend
kill $(lsof -ti :8001) 2>/dev/null   # Stop backend
kill $(pgrep mongod) 2>/dev/null     # Stop MongoDB
```

---

## Customize

Edit **`frontend/src/lib/portfolioData.js`** — replace all sample data with your own info.

| Field          | Description                                  |
| -------------- | -------------------------------------------- |
| `profile`      | Your name, role, tagline, social links       |
| `experience`   | Work history with bullet points              |
| `projects`     | Featured projects details                    |
| `skills`       | Skills organized by category                 |
| `testimonials` | Quotes from colleagues or managers           |

---

## Deploy to GitHub Pages

1. Push to your repo
2. Go to **Settings → Pages**
3. **Source → "Deploy from a branch"** → **Branch → `gh-pages` → `/ (root)`**
4. The included GitHub Action builds and deploys automatically on every push

---

## License

MIT — free to use, modify, and distribute.
