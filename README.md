# Project Name

Frontend UI for an app marketing website — includes Home, Features, Pricing, FAQs, About, Careers, and Contact pages, built with reusable React components and form validation."

## Overview

This is a multi-page React website built with reusable, component-driven sections. It includes:

- **Marketing pages:** Features, About Us, Careers, FAQs, Contact Us
- **Legal pages:** Terms & Conditions, Sitemap
- **Reusable UI components:** Navbar, Footer, pricing plan cards, FAQ accordions (with category filtering), a reusable newsletter/subscribe block, a contact form with schema-based validation, and a mobile-mockup "chat" widget used across multiple sections

## Tech Stack

| Technology | Purpose | Version |
|---|---|---|
| React | UI library | `^19.2.8` |
| React Router (`react-router-dom`) | Client-side routing between pages | `^7.18.3` |
| React Hook Form | Form state management | `^7.88.0` |
| Zod | Schema-based form validation | `^4.6.5` |
| `@hookform/resolvers` | Connects Zod schemas to React Hook Form | `^5.9.1` |
| React Icons | Icon components (`react-icons/io5`, `react-icons/fa`, etc.) | `^5.7.0` |
| CSS | Styling (plain `.css` files per component, no CSS framework) | — |
| Vite / Create React App | Build tool and dev server | *(confirm which one this project uses — see note below)* |


## Project Structure

```
src/
├── assets/              # Images, icons, and other static files
├── components/          # Shared components (Navbar, Footer, etc.)
├── pages/                # Top-level route components (Features, FAQs, ContactUs, Careers, AboutUs)
├── FeaturesComponents/   # Sections used on the Features page
├── FAQs/                 # Sections used on the FAQ page
├── ContactPage/          # Sections used on the Contact page
├── CarrerPageComponents/ # Sections used on the Careers page
├── AboutUsPage/          # Sections used on the About Us page
├── DashboardComponents/  # Reusable dashboard-style components (e.g. Subscribe, Mobile mockup)
└── App.jsx               # Route definitions
```


## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js) or yarn/pnpm if your project uses one of those instead

## Running on Your Computer

1. **Clone the repository**
   ```bash
   git clone https://github.com/anuj-tiwari-iphtech/App-Marketing-Website.git
   cd App-Marketing-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**

   If the project uses **Vite**:
   ```bash
   npm run dev
   ```
   Then open the URL shown in your terminal (typically `http://localhost:5173`).

   If the project uses **Create React App**:
   ```bash
   npm start
   ```
   Then open `http://localhost:3000` in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```
   This outputs a production-ready build to the `dist/` (Vite) or `build/` (CRA) folder.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` / `npm start` | Runs the app in development mode with hot reload |
| `npm run build` | Builds the app for production |
| `npm run preview` | Locally preview the production build (Vite only) |
