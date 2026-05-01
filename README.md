# Teemo 🎯

A fullstack web application built with **React + Vite** (frontend) and **Express.js** (backend), organized as an **npm monorepo**.

---

## Project Structure

```
teemo/
├── frontend/          # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── assets/
│   ├── index.html
│   └── vite.config.js
│
├── backend/           # Express.js REST API
│   ├── src/
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   └── api.routes.js
│   │   └── server.js
│   └── .env.example
│
├── package.json       # Root workspace + shared scripts
├── .gitignore
└── README.md
```

---

## Tech Stack

| Layer     | Technology                         |
|-----------|------------------------------------|
| Frontend  | React 19, Vite, Tailwind CSS v4    |
| Backend   | Node.js, Express.js                |
| Routing   | React Router v7 (client), Express (server) |
| Monorepo  | npm workspaces                     |

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 8.x (comes with Node.js)

### 1. Install all dependencies

From the **root** directory:

```bash
npm install
```

This installs dependencies for both `frontend` and `backend` workspaces in one command.

### 2. Set up environment variables

```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env` with your actual values (DB URL, JWT secret, etc.).

### 3. Run in development mode

```bash
# Run frontend + backend concurrently
npm run dev

# Or run them separately
npm run dev:frontend   # http://localhost:5173
npm run dev:backend    # http://localhost:5000
```

> The Vite dev server automatically **proxies** all `/api/*` requests to the backend — no CORS configuration needed during development.

---

## Available Scripts (from root)

| Command              | Description                                  |
|----------------------|----------------------------------------------|
| `npm run dev`        | Start frontend + backend concurrently        |
| `npm run dev:frontend` | Start only the Vite dev server             |
| `npm run dev:backend`  | Start only the Express server (with watch) |
| `npm run build`      | Build the frontend for production            |
| `npm run lint`       | Lint the frontend source                     |

---

## API Reference

### Health

| Method | Endpoint    | Description        |
|--------|-------------|--------------------|
| GET    | `/health`   | Server health check |
| GET    | `/api/ping` | API liveness check  |

### Auth

| Method | Endpoint             | Description        |
|--------|----------------------|--------------------|
| POST   | `/api/auth/login`    | Login a user       |
| POST   | `/api/auth/register` | Register a user    |
| POST   | `/api/auth/logout`   | Logout a user      |

---

## Development Workflow

```
Frontend (React)  →  /api/*  →  Vite Proxy  →  Backend (Express)
    :5173                                            :5000
```

1. **Frontend** makes fetch/axios calls to relative paths like `/api/auth/login`
2. **Vite proxy** (in `vite.config.js`) forwards them to `http://localhost:5000`
3. **Express backend** handles the request and responds
4. In **production**, configure your reverse proxy (Nginx/Caddy) or deploy frontend and backend separately

---

## Adding Features

### New backend route

1. Create `backend/src/routes/feature.routes.js`
2. Import and mount it in `backend/src/server.js`:
   ```js
   import featureRoutes from './routes/feature.routes.js'
   app.use('/api/feature', featureRoutes)
   ```

### New frontend page

1. Create `frontend/src/pages/FeaturePage.jsx`
2. Add a `<Route>` in `frontend/src/pages/App.jsx`

---

## Production Deployment

- **Backend**: deploy as a Node.js service (Railway, Render, EC2, etc.)
- **Frontend**: run `npm run build` → serve the `frontend/dist/` folder via Nginx, Vercel, or a CDN
- **Full-stack on one server**: serve `frontend/dist` as static files from Express

---

## License

MIT
