# Chidera Collins — Portfolio

A high-performance portfolio website built with **React**, **TypeScript (TSX)**, and **Vite**, designed after the curated frames in `portfolio.pen` with seamless **Light Mode** and **Dark Mode**, responsive mobile styling, and automated **GitHub Pages** deployment.

## Features

- **Accurate Design Replication**: Faithfully matches the four frames (`Desktop Light`, `Desktop Dark`, `Mobile Light`, `Mobile Dark`) from `portfolio.pen`.
- **Dynamic Theme Switcher**: Toggle between Light Mode and Dark Mode with instant CSS variable updates and `localStorage` persistence.
- **Modern Tech Stack**: React 19, TypeScript, Vite 6, and Lucide Icons.
- **Static GitHub Pages Ready**: Bundles into pure static HTML/CSS/JS via `npm run build` with relative base path (`./`).
- **Automated Deployment**: GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on every push.

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the local development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production (GitHub Pages)
```bash
npm run build
```
This compiles the application into the `dist/` directory.

### 4. Deploying to GitHub Pages
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete portfolio build"
   git push origin main
   ```
2. In your repository on GitHub:
   - Navigate to **Settings** → **Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions**.
3. The workflow will automatically compile and deploy your site live!
