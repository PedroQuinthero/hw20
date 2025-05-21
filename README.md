# hw20: Coding Quiz with CI/CD

## 🚀 Project Overview

This is a full-stack coding quiz application built with:

* **React + Vite** (frontend)
* **Node.js + Express** (backend)
* **MongoDB Atlas** (database)
* **TypeScript** throughout the stack
* **Cypress** for component testing
* **GitHub Actions** for CI/CD
* **Render** for deployment (both frontend and backend)

Users can take a quiz, and the system tracks questions stored in MongoDB.

---

## 🔗 Live Links

* **Frontend:** [https://hw20-client.onrender.com](https://hw20-client.onrender.com)
* **Backend API:** [https://YOUR-BACKEND-NAME.onrender.com](https://YOUR-BACKEND-NAME.onrender.com)

---

## 🛠️ Technologies Used

### Frontend

* React
* Vite
* TypeScript
* CSS Modules / Vite styles

### Backend

* Node.js
* Express.js
* TypeScript
* Mongoose

### DevOps

* GitHub Actions
* Render
* Cypress
* Concurrently (for local dev)

---


## 🧪 Testing with Cypress

Cypress component tests are run automatically when a Pull Request is made to the `develop` branch via GitHub Actions.

---

## 🚀 Deployment Pipeline

* ✅ PR to `develop` → Runs Cypress tests
* ✅ Merge `develop` → `main` → Triggers auto-deploy to Render (backend)
* ✅ Static site served on Render (frontend)



---

## 📂 Project Structure

```
client/     # React + Vite frontend
server/     # Node + Express backend
.github/    # GitHub Actions workflows
cypress/    # Cypress tests
```

---

## 📬 How to Use

1. Visit the [live frontend](https://hw20-client.onrender.com)
2. Click Start Quiz
3. Answer coding questions pulled from the database

---

## 🧑‍💻 Author

Pedro Quinthero
