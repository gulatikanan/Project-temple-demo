# TempleHub Backend

This is the backend for the TempleHub application, built with **Strapi v5** (Headless CMS). It provides the API for managing Events, Volunteers, and other content consumed by the Frontend.

## 🚀 Live Demo
**Backend API URL**: [INSERT_YOUR_RENDER_URL_HERE]  
*(e.g., https://templehub-backend.onrender.com)*

**Admin Panel**: [INSERT_YOUR_RENDER_URL_HERE]/admin

---

## 🛠 Features
- **Content Types**:
  - `Event`: Manage community events (Title, Date, Description, Volunteers Needed).
  - `Volunteer`: Store volunteer signups (Name, Email, Interest).
- **Database**: 
  - Local: SQLite (simple, zero-config).
  - Production: PostgreSQL (via `pg` client).
- **API**: REST API enabled with public access configurations.

## 💻 Local Development

### Prerequisites
- Node.js v18 or v20.
- NPM or Yarn.

### Installation
1.  Navigate to the directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run develop
    ```
4.  The server should start at `http://localhost:1337`.

### First Time Setup
1.  Open `http://localhost:1337/admin`.
2.  Create your **Super Admin** account.
3.  **Permissions**:
    - Go to **Settings** -> **Users & Permissions** -> **Roles** -> **Public**.
    - **Event**: Check `find` and `findOne`.
    - **Volunteer**: Check `create`.
    - Click **Save**.

---

## ☁️ Deployment (Render)
This project is configured for **Render** using the `render.yaml` blueprint.

1.  Push code to GitHub.
2.  Create a new **Blueprint Instance** on Render.
3.  Connect this repository.
4.  Set the **Environment Variables** (Render normally handles the database URL automatically with blueprints).
    - ensure `HOST` is `0.0.0.0`
    - ensure `NODE_VERSION` is `20.12.0`
    - Add robust secrets for `APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, `TRANSFER_TOKEN_SALT`, `JWT_SECRET`.

### API Endpoints
| Method | Endpoint | Description | Public Access? |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/events` | List all events | ✅ Yes |
| `GET` | `/api/events/:id` | Get details of one event | ✅ Yes |
| `POST` | `/api/volunteers` | Submit volunteer form | ✅ Yes |

---
*Powered by [Strapi](https://strapi.io)*
