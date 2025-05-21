# CI/CD Pipeline Tutorial for Coding Quiz App

## Overview

This guide walks through how CI/CD was implemented using GitHub Actions and Render in the **Coding Quiz Full-Stack App**.

* **Frontend**: React + Vite (deployed to Render Static Site)
* **Backend**: Node.js + Express + MongoDB Atlas (deployed to Render Web Service)
* **CI/CD**: GitHub Actions
* **Testing**: Cypress component tests

---

## GitHub Actions Setup

Two separate workflows were created:

### 1. Cypress Tests on PR to `develop`

**Path**: `.github/workflows/cypress-tests.yml`

```yaml
on:
  pull_request:
    branches: [develop]
```

* Runs Cypress component tests automatically when a PR is created to `develop`
* Ensures new code does not break the app before merging

### 2. Deploy to Render on Push to `main`

**Path**: `.github/workflows/deploy-to-render.yml`

```yaml
on:
  push:
    branches:
      - main
```

* Triggers a deploy to Render using a **Deploy Hook URL** stored in a GitHub Secret
* Only executes when code is merged into `main`

---

## Render Configuration

### Backend

* Service Type: Web Service
* Root Directory: `server`
* Build Command: `npm install && npm run build`
* Start Command: `npm start`
* Environment Variable:

  * `MONGODB_URI`: points to MongoDB Atlas URI

### Frontend

* Service Type: Static Site
* Root Directory: `client`
* Build Command: `npm run build`
* Publish Directory: `dist`
* Uses `VITE_API_URL` in `.env.production` to point to deployed backend

### Manual Deploy Settings

* Auto-deploy is turned off
* Render Deploy Hook URL used for GitHub-triggered deploys

---

## GitHub Secrets Used

* `RENDER_DEPLOY_HOOK_URL`: used in GitHub Action to POST to Render and trigger deploy

---

## Cypress Setup

* Tests are stored in `cypress/e2e`
* Cypress is installed as a dev dependency
* GitHub Action runs `npm run build`, then waits for app to boot and runs Cypress

---

## Summary

* Feature branches → PR to `develop` → Cypress runs
* Merge to `main` → Deploys to Render backend via Deploy Hook
* Static frontend is deployed manually to Render after rebuilding

This setup ensures:
✅ Code quality via tests
✅ Controlled deploys to production
✅ Automation across the lifecycle
