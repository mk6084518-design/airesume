<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=220&section=header&text=AI%20Resume%20Analyzer&fontSize=48&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Get%20Smarter%20Resume%20Feedback%20with%20AI&descAlignY=58&descSize=20" width="100%"/>

<p>
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=2500&pause=800&color=8A2BE2&center=true&vCenter=true&multiline=true&repeat=true&width=650&height=60&lines=Upload+Your+Resume.+Get+Instant+AI+Feedback.;Role-Specific+Insights+Powered+by+Gemini+AI;Ace+Your+Next+Interview+with+Confidence" alt="Typing SVG" />
</p>

<p>
  <a href="https://airesume-1-ycaj.onrender.com">
    <img src="https://img.shields.io/badge/🚀_Live_Demo-Visit_App-8A2BE2?style=for-the-badge&logo=render&logoColor=white" />
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" />
</p>

</div>

<br/>

## 🌟 Overview

**AI Resume Analyzer** is a full-stack AI-powered platform that gives job seekers **instant, role-specific feedback** on their resumes. Upload your resume along with a target job title or description, and let **Google Gemini** analyze it — generating tailored improvement suggestions and simulating a real **behavioral interview**.

No more guessing whether your resume is good enough. Just upload, analyze, and improve.

<br/>

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 📄 Smart Resume Analysis
Upload a resume + target role and get an AI-driven breakdown of strengths, gaps, and improvement areas — tailored to the specific job.

</td>
<td width="50%">

### 🎯 Role-Specific Q&A
Automatically generates **5 tailored questions & answers** to help you strengthen your resume for the exact role you're targeting.

</td>
</tr>
<tr>
<td width="50%">

### 🎤 AI Interview Prep
Get **AI-generated behavioral interview questions** based on your resume and job description — practice before the real thing.

</td>
<td width="50%">

### 🔐 Secure Authentication
Full **JWT-based auth flow** keeps your data and resume history private and secure.

</td>
</tr>
</table>

<br/>

## 🛠️ Tech Stack

<div align="center">

| Layer | Technologies |
|---|---|
| **Frontend** | React.js, Redux Toolkit |
| **Backend** | Node.js, Express.js, Nodemon |
| **Database** | MongoDB |
| **AI Engine** | Google Gemini API |
| **Auth** | JWT (JSON Web Tokens) |
| **File Handling** | Multer + pdf-parse (resume PDF parsing) |
| **Deployment** | Render |

</div>

<br/>

## ⚙️ How It Works

```mermaid
flowchart LR
    A[📤 Upload Resume PDF] --> B[✍️ Enter Target Job Title/Description]
    B --> C[🔍 pdf-parse extracts resume text]
    C --> D[🤖 Google Gemini analyzes content]
    D --> E[📊 Tailored Feedback + 5 Q&As]
    D --> F[🎤 AI Behavioral Interview Prep]
    style D fill:#8A2BE2,color:#fff
```

<br/>

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB instance (local or Atlas)
- Google Gemini API key

### Installation

```bash
# Clone the repository
git clone https://github.com/mk6084518-design/ai-resume-analyzer.git
cd ai-resume-analyzer

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_jwt_secret
```

### Run Locally

```bash
# Start backend (runs on port 3000)
cd backend
nodemon index.js

# Start frontend
cd frontend
npm run dev
```

<br/>

## 🔗 Live Demo

<div align="center">

### 👉 [**airesume-1-ycaj.onrender.com**](https://airesume-1-ycaj.onrender.com) 👈

</div>

<br/>

## 📌 Roadmap

- [ ] Resume scoring dashboard with visual analytics
- [ ] Support for multiple resume formats (DOCX, TXT)
- [ ] ATS-compatibility checker
- [ ] Downloadable AI-optimized resume suggestions

<br/>

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
Feel free to check the [issues page](../../issues).

<br/>

## 👤 Author

<div align="center">

**Manoj Kumar**

<a href="https://github.com/mk6084518-design">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
</a>

</div>

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer" width="100%"/>

</div>
