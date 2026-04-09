<div align="center">
  <h1>Xentra - The Metagame Layer</h1>
  <p>A sophisticated, high-performance web platform featuring cutting-edge animations and a fully secure Full-Stack authentication ecosystem.</p>
</div>

<hr />

## 📖 Overview

Xentra is designed as the ultimate premium portal with a core architecture optimized for massive scalability. The project's intricate glassmorphism UI and covert "Agent" branding perfectly position it for our primary overarching development trajectory: **AI Agentic Automation (SaaS)**.

As a high-end AI platform, Xentra allows users to securely spin up, deploy, and monitor autonomous AI agents to handle complex generative tasks and web logic. 

## 📸 Architectural Visuals

The graphical layout of Xentra relies heavily on immersive, intricately designed front-end assets that complement its futuristic AI environment. Below are the core visual interfaces establishing the platform's visual identity:

<div align="center">
  <img src="client/public/img/about.webp" alt="Agent About Section" width="800" style="border-radius: 12px; margin-bottom: 25px;" />
  <img src="client/public/img/gallery-2.webp" alt="Metagame Hubs Interface" width="800" style="border-radius: 12px; margin-bottom: 25px;" />
  <img src="client/public/img/gallery-3.webp" alt="Data Structures Matrix" width="800" style="border-radius: 12px; margin-bottom: 25px;" />
  <img src="client/public/img/gallery-5.webp" alt="Automated Hub" width="800" style="border-radius: 12px; margin-bottom: 10px;" />
</div>

## 🛠️ Frameworks

### Client-Side
- **Framework**: React 19 / Vite
- **Styling**: Tailwind CSS & Custom Glassmorphism
- **Routing**: React Router DOM (Dynamic Protected Routes)

### Server-Side
- **Runtime**: Node.js & Express
- **Database**: MongoDB (via Mongoose)
- **Security**: Bcrypt.js & JSON Web Tokens (JWT)

## 🔐 Core Capabilities

The backend is completely secured against unauthorized agents, establishing the baseline needed for the future AI Automation SaaS layer:
1. **Full-Stack Connectivity**: Asynchronous HTTP calls directly to the Express API.
2. **Persistent Sessions**: Secure `JWT` caching inside the browser's `localStorage`.
3. **Protected Routing**: Intruders attempting to visit the root page (`/`) without a verified token are forcefully redirected.
4. **Automated Handshakes**: Successful signups instantly encrypt to the DB and slide the user into the main application.

## 🚀 Getting Started

The project is structured into two core directories: `/client` and `/server`.

### 1. Boot up the Database & API
Open a terminal and navigate to the server folder:
```bash
cd server
npm install
npm run dev
```

### 2. Boot up the Frontend UI
Open a second terminal and navigate to the client folder:
```bash
cd client
npm install
npm run dev
```
Navigate to `http://localhost:5174/login` strictly to access the authorized layer.
