# 🚀 InterviewPilot

An AI-powered web application that generates **personalized interview preparation plans** based on your resume, self-description, and job description.

---

## 📌 Features

### 🔐 Authentication

* User registration & login (JWT-based)
* Secure cookie authentication
* Protected routes

### 🤖 AI-Powered Interview Prep

* Upload resume (PDF)
* Provide job description
* Get:

  * Match score
  * Technical questions
  * Behavioral questions
  * Skill gaps
  * Preparation roadmap

### 📄 Resume Generator

* AI-generated optimized resume
* Download as PDF

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* React Router DOM
* Axios
* SCSS

### Backend

* Node.js + Express
* MongoDB + Mongoose
* JWT Authentication
* Multer (file upload)
* PDF parsing
* Puppeteer (PDF generation)

### AI

* Google Gemini API (`@google/genai`)

---

## 📁 Project Structure

```
InterviewPilot/
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── services/
│   ├── app.js
│   ├── server.js
│   └── .env
│
├── Frontend/
│   ├── src/
│   │   ├── features/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

---

### 🔹 1. Clone the repository

```bash
git clone https://github.com/your-username/interviewpilot.git
cd interviewpilot
```

---

## 🔧 Backend Setup

### 📦 Install dependencies

```bash
cd Backend
npm install
```

---

### 🔐 Create `.env` file

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GOOGLE_GENAI_API_KEY=your_google_api_key
```

---

### ▶️ Run backend

```bash
npm run dev
```

Server will run on:

```
http://localhost:3000
```

---

## 💻 Frontend Setup

### 📦 Install dependencies

```bash
cd Frontend
npm install
```

---

### ▶️ Run frontend

```bash
npm run dev
```

App will run on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

### 🔐 Auth Routes

* `POST /api/auth/register`
* `POST /api/auth/login`
* `GET /api/auth/logout`
* `GET /api/auth/get-me`

---

### 📊 Interview Routes

* `POST /api/interview/`
* `GET /api/interview/`
* `GET /api/interview/report/:interviewId`
* `POST /api/interview/resume/pdf/:interviewReportId`

---

## 🔄 Application Flow

1. User registers/logs in
2. Uploads resume or writes self-description
3. Adds job description
4. Backend sends data to AI
5. AI generates interview report
6. User views:

   * Questions
   * Skill gaps
   * Roadmap
7. User downloads resume PDF

---

## ⚠️ Common Issues & Fixes

### ❌ MongoDB not connecting

* Check `MONGO_URI`

### ❌ AI not working

* Verify `GOOGLE_GENAI_API_KEY`

### ❌ Cookies not working

* Ensure:

  ```js
  withCredentials: true
  ```

### ❌ Puppeteer error

```bash
npm install puppeteer --unsafe-perm=true
```

---

## 🧠 Future Improvements

* Add user dashboard analytics
* Add mock interview simulation
* Support DOCX resume parsing
* Deploy on cloud (AWS/Vercel)

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Author

Built by **[Your Name]**

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 🧠 Contribute

---
