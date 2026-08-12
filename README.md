# Campus2Career

## Overview

This repository contains a React + Vite frontend and an Express + MongoDB backend for the Campus2Career learning platform.

- Frontend: root project built with Vite
- Backend: `server/server.js` handles authentication, user progress, AI chat, and learning resource endpoints

## Prerequisites

- Node.js 20+ (recommended)
- npm
- MongoDB instance or MongoDB Atlas cluster

## Setup

### Install dependencies

```bash
cd c:\Users\hp\OneDrive\Desktop\outputs
npm install
cd server
npm install
```

### Configure environment variables

Create `server/.env` or copy `server/.env.example` and update the values:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/campus2career
JWT_SECRET=replace_this_with_a_strong_secret
GEMINI_API_KEY=your_gemini_api_key_here
```

## Run locally

### Frontend

```bash
cd c:\Users\hp\OneDrive\Desktop\outputs
npm run dev
```

### Backend

```bash
cd c:\Users\hp\OneDrive\Desktop\outputs\server
npm start
```

## Production build

Build the frontend for deployment:

```bash
cd c:\Users\hp\OneDrive\Desktop\outputs
npm run build
```

The built frontend files will be generated in `dist/`.

## Health check

After starting the backend, verify it with:

```bash
curl http://localhost:5000/api/health
```

## Deployment notes

- Use Node.js 20 or higher for deployment.
- Frontend static files are in `dist/` after `npm run build`.
- Backend requires MongoDB and environment variables in `server/.env`.
- Keep `.env` files out of version control; `.gitignore` excludes them.

## Status

- Frontend production build succeeds.
- Backend startup and `/api/health` endpoint verified.
- No compile/build errors detected.

