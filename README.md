# TempleHub (Event & Volunteer Portal)

A meaningful, full-stack web application designed for community event management and volunteer coordination.

## Tech Stack
- **Frontend**: React (Vite)
- **Backend**: Strapi CMS (Headless)
- **Database**: SQLite (Local), Postgres (Production)
- **Styling**: Vanilla CSS (Premium Design System)

## Project Structure
- `frontend/`: The React application.
- `backend/`: The Strapi CMS application.

## Getting Started

### 1. Backend (Strapi)
Start the CMS first to manage content.

```bash
cd backend
npm run develop
```
The Admin panel will be available at `http://localhost:1337/admin`.
Create your first Admin user and add some "Event" entries!

### 2. Frontend (React)
In a new terminal:

```bash
cd frontend
npm install
npm run dev
```
Open `http://localhost:5173` to view the app.

## Features (Fully Working)
- **Responsive Premium UI**: Beautiful, spiritual-themed design.
- **Event Listing**: View upcoming community events.
- **Volunteer Integration**: Call-to-actions for volunteering.
- **Components**: Navbar, Hero, Event Cards, Footer.
- **Mock Data Fallback**: The frontend works immediately with mock data (`src/data/mockData.js`) if the backend is not running or connected yet.

## Deployment Guide

### Deploying Frontend to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` inside the `frontend` folder.
3. Follow the prompts.

### Deploying Backend to Railway
1. Create a GitHub repo and push this code.
2. Sign up on Railway.app.
3. Create a new project from the GitHub repo (select `backend` folder as root).
4. Add a PostgreSQL database service.
5. Set environment variables (`DATABASE_CLIENT`, `DATABASE_URL`, etc.).

---
Built with ❤️ by Antigravity.
