# TempleHub (Event & Volunteer Portal)

A meaningful, full-stack web application designed for community event management and volunteer coordination.

## Tech Stack
- **Frontend**: React (Vite)
- **Backend**: Strapi CMS (Headless)
- **Database**: SQLite (Local), Postgres (Production/Render)
- **Styling**: Vanilla CSS (Premium Design System)

## Project Structure
- `frontend/`: The React application.
- `backend/`: The Strapi CMS application.

---

## 🚀 Deployment Guide (Production)

### 1. Deploy Backend (Strapi) to Render
We have included a `render.yaml` blueprint for automatic deployment.

1.  Create a [Render](https://render.com) account.
2.  Connect your GitHub repository.
3.  Go to **Blueprints** and select "New Blueprint Instance".
4.  Select this repository.
5.  Render will automatically:
    - Create a PostgreSQL Database.
    - Deploy the Strapi Backend.
    - Set all necessary Environment Variables (Database URL, Secrets, etc.).
6.  **Important**: Once deployed, open the URL (e.g., `https://templehub-backend.onrender.com/admin`) and **create the first Admin User**.
7.  **Enable API Access**:
    - Go to `Settings -> Users & Permissions -> Roles -> Public`.
    - Check **find** and **findOne** for **Event**.
    - Check **create** for **Volunteer**.
    - Click **Save**.

### 2. Deploy Frontend (React) to Vercel
1.  Create a [Vercel](https://vercel.com) account.
2.  Import this repository.
3.  **Crucial Settings**:
    - **Root Directory**: `frontend` (Edit this!)
    - **Build Command**: `vite build` (Default)
    - **Output Directory**: `dist` (Default)
4.  **Environment Variables**:
    - Add `VITE_API_URL` -> Your Render Backend URL (e.g., `https://templehub-backend.onrender.com`).
5.  Deploy!

---

## 🛠️ Local Development

### 1. Backend (Strapi)
Start the CMS first to manage content.

```bash
cd backend
npm install
npm run develop
```
- **Admin Panel**: `http://localhost:1337/admin`
- **First Run**: Create your Admin account.
- **Permissions**: Go to `Settings -> Users & Permissions -> Roles -> Public` and enable `find` for Events and `create` for Volunteers.

### 2. Frontend (React)
In a new terminal:

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```
Open `http://localhost:5173` to view the app.

---

## ✅ Features (Fully Working)
- **Responsive Premium UI**: Beautiful, spiritual-themed design.
- **Event Listing**: View upcoming community events.
- **Volunteer Integration**: 
  - Dynamic "Volunteer Spots Left" tracker.
  - **Functional Sign-up Form**: Users can now sign up to volunteer!
- **Components**: Navbar, Hero, Event Cards, Volunteer Form, Footer.
- **Robust Error Handling**: If the backend is down, the Frontend flawlessly falls back to **Mock Data** so the UI never breaks.

## api Documentation
- `GET /api/events`: List all events.
- `POST /api/volunteers`: Submit a volunteer application.
  - Payload: `{ "data": { "name": "...", "email": "...", "phone": "..." } }`

---
Built with ❤️ by Antigravity.
