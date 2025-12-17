# Deploying AI Medical App to Vercel

This project is configured for seamless deployment on Vercel.

## Prerequisites

1. A [Vercel Account](https://vercel.com).
2. [Vercel CLI](https://vercel.com/docs/cli) installed (optional, for command line deployment).
3. A [GitHub](https://github.com) account (recommended).

## Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub**:
    Create a new repository on GitHub and push this code:

    ```bash
    git remote add origin <your-repo-url>
    git push -u origin main
    ```

2. **Import in Vercel**:
    - Go to your Vercel Dashboard.
    - Click **"Add New..."** -> **"Project"**.
    - Select your GitHub repository.
    - Vercel will detect `Vite`.
    - Click **Deploy**.

## Option 2: Deploy via Vercel CLI

1. Run the deploy command in your terminal:

    ```bash
    npx vercel
    ```

2. Follow the prompts:
    - Set up and deploy? **Yes**
    - Which scope? **(Select your account)**
    - Link to existing project? **No**
    - Project name? **ai-medical**
    - Directory? **./**
    - Settings? **(Keep default)**

## Configuration Note

A `vercel.json` file is included to handle Single Page Application (SPA) routing, ensuring that refreshing pages like `/dashboard` or `/chat` works correctly after deployment.

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
