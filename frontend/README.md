# TempleHub Frontend

The client-side application for TempleHub, built with **React** and **Vite**. It provides a premium, responsive interface for community members to browse events and sign up as volunteers.

## 🚀 Live Demo
**Frontend URL**: [INSERT_YOUR_VERCEL_URL_HERE]  
*(e.g., https://templehub.vercel.app)*

---

## 🛠 Features
- **Modern UI/UX**:
  - Built with a custom "Serene & Spiritual" design system (CSS Variables).
  - Responsive Grid Layouts for events.
  - Glassmorphism effects in navigation.
- **Event Management**:
  - Dynamic Event Listing fetching data from Strapi.
  - "Spots Left" calculator for volunteers.
  - Fallback mechanism: Automatically switches to Mock Data if the backend is unreachable.
- **Volunteer System**:
  - Integrated Signup Form.
  - Client-side validation.
  - Direct submission to Strapi API.

## 💻 Local Development

### Prerequisites
- Node.js v18+.
- NPM or Yarn.

### Installation
1.  Navigate to the directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure Environment:
    ```bash
    cp .env.example .env
    ```
    Edit `.env` and set `VITE_API_URL` to your backend (or local) URL:
    ```
    VITE_API_URL=http://localhost:1337
    # OR for production:
    # VITE_API_URL=https://backend-temple.onrender.com
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
5.  Open `http://localhost:5173`.

---

## ☁️ Deployment (Vercel)

1.  Push this code to GitHub.
2.  Go to [Vercel](https://vercel.com) and "Add New Project".
3.  **Import** the `Project-temple-demo` repository.
4.  **Framework Preset**: Vite (Auto-detected).
5.  **Root Directory**: Click "Edit" and select `frontend`. **(Crucial Step!)**
6.  **Environment Variables**:
    - `VITE_API_URL`: `https://backend-temple.onrender.com` (Your live backend)
7.  Click **Deploy**.

## 📂 Project Structure
- `src/components`: Reusable UI components (Navbar, Hero, EventList, VolunteerForm).
- `src/data`: Contains `mockData.js` for offline/fallback mode.
- `src/index.css`: Global design system and variables.
