# 📝 Todo MERN App

A full-stack Todo application built with MongoDB, Express, React, and Node.js.

## 🚀 Features

- User registration and login (JWT)
- Create, update, delete, and toggle todos
- AI-powered todo suggestions (`/api/todos/recommend`)
- RTK Query data fetching and cache invalidation
- Responsive UI with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- React
- Redux Toolkit / RTK Query
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express
- Mongoose
- Joi validation
- JWT authentication

### Database
- MongoDB

## 📦 Prerequisites

- Node.js 18+
- npm
- MongoDB (local or hosted)

## ⚙️ Environment Variables

Copy `.env.example` to `.env` in the repository root and set values:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todo-mern
NODE_ENV=development
OPENAI_API_KEY=your_openai_api_key_here
JWT_SECRET=your_jwt_secret_here
```

## ▶️ Run Locally

From the project root:

```bash
npm install
cd client && npm install && cd ..
npm run dev
```

This starts:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:5173`

## 📚 API Endpoints

### Health
- `GET /api/health`

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Todos
- `GET /api/todos`
- `POST /api/todos`
- `GET /api/todos/:id`
- `PUT /api/todos/:id`
- `DELETE /api/todos/:id`
- `PATCH /api/todos/:id/toggle`
- `POST /api/todos/recommend`

## 🧪 Available Scripts

At the repository root:

- `npm run server` — start Express server
- `npm run client` — start Vite client
- `npm run dev` — run server and client together

In `client/`:

- `npm run dev` — start Vite dev server
- `npm run build` — build production assets

## 👨‍💻 Author

Made by Uzair.
