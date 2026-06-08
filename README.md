# Todo MERN

A full-stack todo application built with React, Vite, Express, MongoDB, and Mongoose. The app supports user registration and login, todo CRUD, completion toggling, and AI-generated todo suggestions.

## Features

- JWT-based authentication with register and login flows.
- Create, view, delete, and toggle todos.
- MongoDB persistence through Mongoose models.
- AI suggestions endpoint for generating todo ideas from a prompt.
- Redux Toolkit Query on the client for data fetching and mutations.

## Tech Stack

- Frontend: React, Vite, Redux Toolkit Query
- Backend: Node.js, Express, Mongoose, JWT
- Database: MongoDB
- Optional AI: OpenAI API

## Project Structure

- `client/` - Vite React app
- `server/` - Express API and MongoDB models

## Prerequisites

- Node.js 18 or newer
- MongoDB instance running locally or a MongoDB Atlas connection string
- OpenAI API key if you want the AI suggestions feature to work

## Setup

Install dependencies for the root app and the client separately:

```bash
npm install
cd client
npm install
```

Create a `server/.env` file with the values you need:
=======
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
>>>>>>> e8dcc71bce9839bf9920c8d627eea5192f06b2a9

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todo-mern
<<<<<<< HEAD
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_openai_api_key
```

The client is configured to talk to `http://localhost:5000/api`.

## Run Locally
=======
NODE_ENV=development
OPENAI_API_KEY=your_openai_api_key_here
JWT_SECRET=your_jwt_secret_here
```

## ▶️ Run Locally
>>>>>>> e8dcc71bce9839bf9920c8d627eea5192f06b2a9

From the project root:

```bash
<<<<<<< HEAD
npm run dev
```

This starts the Express server and the Vite client together.

You can also run them separately:

```bash
npm run server
npm run client
```

## Available Scripts

Root:

- `npm run server` - start the Express API
- `npm run client` - start the Vite frontend
- `npm run dev` - run both apps together

Client:

- `npm run dev` - start the Vite dev server
- `npm run build` - create a production build

## API Endpoints

Auth:

- `POST /api/auth/register`
- `POST /api/auth/login`

Todos:

=======
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
>>>>>>> e8dcc71bce9839bf9920c8d627eea5192f06b2a9
- `GET /api/todos`
- `POST /api/todos`
- `GET /api/todos/:id`
- `PUT /api/todos/:id`
- `DELETE /api/todos/:id`
- `PATCH /api/todos/:id/toggle`
- `POST /api/todos/recommend`

<<<<<<< HEAD
Health check:

- `GET /api/health`

## Notes

- The client stores the JWT in `localStorage` and sends it as a Bearer token.
- The AI recommendations endpoint expects a `prompt` field in the request body.
- If MongoDB is unavailable, the server still starts, but persistence features will fail until the database is reachable.
=======
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
>>>>>>> e8dcc71bce9839bf9920c8d627eea5192f06b2a9
