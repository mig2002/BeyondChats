# BeyondChats – Article Automation System

Automated system to scrape, enhance, and manage blog articles using Node.js, REST APIs, and a React frontend.

---

## 📌 Project Overview

BeyondChats is a full-stack project that automates the lifecycle of blog articles:

- Scrapes the oldest articles from BeyondChats
- Stores them in MongoDB using REST APIs
- Enhances article content using reference articles from the web
- Publishes updated versions while preserving original content
- Displays both original and updated articles in a frontend UI

The project is implemented in **three phases**:

- **Phase 1** – Scraping, storage, and CRUD APIs  
- **Phase 2** – Automated article enhancement  
- **Phase 3** – Frontend visualization  

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose  
- **Automation**: Node.js, Axios, HTML parsing, LLM API  
- **Frontend**: React.js  
- **Database**: MongoDB  

---

## 🚀 Local Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/mig2002/BeyondChats.git
cd BeyondChats
```

---

### 2️⃣ Backend Setup (Phase 1)

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run the backend server:

```bash
node server.js
```

---

### 3️⃣ Scrape and Store Articles (Phase 1)

```bash
node seedBlogs.js
```

This fetches and stores the oldest BeyondChats articles.

---

### 4️⃣ Phase 2 Automation Setup

```bash
cd Phase_2/Automation
npm install
```

Create a `.env` file:

```env
BACKEND_API=http://localhost:5000/api/articles
HF_API_KEY=your_llm_api_key
SERP_API_KEY= your_serp_api_key
```

Run the automation:

```bash
node main.js
```

This enhances articles and publishes updated versions.

---

### 5️⃣ Frontend Setup (Phase 3)

```bash
cd Frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

## 🧩 Architecture / Data Flow

**BeyondChats Blog API**  
→ Phase 1 Scraper  

**MongoDB (Articles Collection)**  
- originalContent  
- content  
- isUpdated  

→ Backend CRUD APIs  

→ Phase 2 Automation  
- Google search for reference articles  
- Reference article scraping  
- Content rewriting using LLM  

→ React Frontend  
- View original articles  
- View updated articles  

🌐 **Live Demo**  
Frontend Live Link: https://your-live-frontend-link-here

