<div align="center">
  <img src="client/public/img/logo.png" alt="Xentra Logo" height="80">
  <br />
  <h1>Xentra - The Metagame Layer</h1>
  <p>A sophisticated, high-performance web platform featuring cutting-edge animations and a fully secure Full-Stack authentication ecosystem.</p>
</div>

<hr />

## 📖 Overview

Xentra is designed to be the ultimate premium portal. While its functional trajectory is currently open-ended for future scaling, its core foundation is entirely built and optimized out of the box. The repository utilizes a scalable client-server monorepo architecture, leveraging React for an extravagant animated frontend and Node.js/MongoDB for iron-clad backend security.

## 📸 Visual Showcase

Our frontend boasts an immersive, highly curated visual language across all its components.

<div align="center">
  <img src="client/public/img/about.webp" alt="About Section" width="800" style="border-radius: 12px; margin-bottom: 5px;" />
  <br />
  <i>The immersive About Interface</i>
  <br />
</div>
<br />

### Graphical Assets
The structure of Xentra relies heavily on intricately designed graphical assets that fuel its futuristic environment.

| Interactive Galleries | Dynamic Contacts |
| :---: | :---: |
| <img src="client/public/img/gallery-1.webp" width="300" style="border-radius: 8px;" /> | <img src="client/public/img/contact-1.webp" width="300" style="border-radius: 8px;" /> |
| <img src="client/public/img/gallery-3.webp" width="300" style="border-radius: 8px;" /> | <img src="client/public/img/contact-2.webp" width="300" style="border-radius: 8px;" /> |

<br />
<div align="center">
  <img src="client/public/img/gallery-4.webp" alt="Gallery Feature" width="800" style="border-radius: 12px;" />
</div>

## 🛠️ Tech Stack

### Client-Side (Frontend)
- **Framework**: React 19 / Vite
- **Styling**: Tailwind CSS & Vanilla CSS (Custom Glassmorphism)
- **Animations**: GSAP (GreenSock Animation Platform)
- **Routing**: React Router DOM (Dynamic Protected Routes)

### Server-Side (Backend)
- **Runtime**: Node.js & Express
- **Database**: MongoDB (via Mongoose)
- **Security**: Bcrypt.js (Password Encryption) & JSON Web Tokens (JWT)

## 🔐 Core Capabilities

Although there are no specific business logic functionalities on the frontend *yet*, the **Authentication System** acts as the powerful gatekeeper for any future scale:
1. **Full-Stack Connections**: The `AuthContext` runs real asynchronous HTTP calls to the MongoDB backend.
2. **Persistent Sessions**: Secure `JWT` caching within the browser's `localStorage` prevents users from losing sessions on refresh.
3. **Protected Routing**: Intruders attempting to visit the root page (`/`) without a verified local token are forcefully redirected to the custom login screen (`/login`).
4. **Auto-Login Registration**: Successful signups instantly encrypt passwords to the DB and slide the user securely into the main application.

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
Navigate to `http://localhost:5174/login` in your local browser to securely enter the Xentra layer.
