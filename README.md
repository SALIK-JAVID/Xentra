<div align="center">
  <img src="client/public/img/jsm-logo.png" alt="Xentra Logo" height="80">
  <br />
  <h1>Xentra - The Metagame Layer</h1>
  <p>A sophisticated, high-performance web platform featuring cutting-edge animations and a fully secure Full-Stack authentication ecosystem.</p>
</div>

<hr />

## 📖 Overview

Xentra is designed as the ultimate premium portal with a core architecture optimized for scalability. While currently maintaining a flexible base, the project's intricate glassmorphism UI and covert "Agent" branding perfectly position it for three primary development trajectories:

1. **AI Agentic Automation (SaaS)**: A high-end platform where users can spin up, deploy, and monitor autonomous AI agents to handle complex generative tasks and web logic. *(Primary Focus)*
2. **Web3 Virtual Portfolio**: A centralized dashboard tracking virtual economies and crypto assets.
3. **Cybersecurity Missions**: A "Capture the Flag" bounty board for developers and ethical hackers.

We are currently optimizing the repository to heavily pivot toward **AI Agentic Automation** as our primary overarching SaaS product.

## 📸 Architectural Visuals

The graphical structure of Xentra relies heavily on intricately designed assets that complement its futuristic AI environment.

<div align="center">
  <img src="client/public/img/about.webp" alt="Agent About Section" width="800" style="border-radius: 12px; margin-bottom: 5px;" />
  <br />
  <i>The immersive Agent Login Interface</i>
  <br />
</div>
<br />

### Extensible Interfaces
As we scale our AI SaaS features, our modular frontend gallery blocks are designed to visualize data seamlessly.

| Metagame Hubs | Data Structures |
| :---: | :---: |
| <img src="client/public/img/gallery-2.webp" width="300" style="border-radius: 8px;" /> | <img src="client/public/img/gallery-3.webp" width="300" style="border-radius: 8px;" /> |

<br />
<div align="center">
  <img src="client/public/img/gallery-5.webp" alt="Automated Hub" width="800" style="border-radius: 12px;" />
</div>

## 🛠️ Frameworks

### Client-Side (Frontend)
- **Framework**: React 19 / Vite
- **Styling**: Tailwind CSS & Vanilla CSS (Custom Glassmorphism)
- **Routing**: React Router DOM (Dynamic Protected Routes)

### Server-Side (Backend)
- **Runtime**: Node.js & Express
- **Database**: MongoDB (via Mongoose)
- **Security**: Bcrypt.js (Password Encryption) & JSON Web Tokens (JWT)

## 🔐 Core Capabilities

The backend is completely secured against unauthorized agents, establishing the baseline needed for the AI Automation SaaS:
1. **Full-Stack Connections**: The `AuthContext` runs asynchronous HTTP calls directly to the Express API.
2. **Persistent Sessions**: Secure `JWT` caching inside `localStorage`.
3. **Protected Routing**: Intruders attempting to visit the root page (`/`) without a verified token are forcefully redirected to the custom auth screens.
4. **Auto-Login**: Successful signups instantly encrypt to the DB and slide the user into the main application.

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
