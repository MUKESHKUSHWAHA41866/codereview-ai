# 🚀 Quick Start Guide

## Setup in 5 Steps

### 1️⃣ Install Dependencies

```bash
npm install
```

---

### 2️⃣ Get Your API Key (Gemini)

1. Go to https://aistudio.google.com/app/apikey
2. Sign in with Google account
3. Click **"Create API Key"**
4. Copy your key

---

### 3️⃣ Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
GEMINI_API_KEY=your_api_key_here
```

---

### 4️⃣ Run Development Server

```bash
npm run dev
```

---

### 5️⃣ Test It Out

1. Open http://localhost:3000
2. Click "Review my code" quick action
3. Paste this code:

```javascript
function add(a, b) {
  return a + b
}
```

4. See the AI review!

---

## 🌐 Deploy to Vercel

### Quick Deploy

```bash
npm i -g vercel
vercel login
vercel
```

Add environment variable in Vercel dashboard:

* Go to Project Settings → Environment Variables
* Add `GEMINI_API_KEY` with your key
* Redeploy

---

## ⚡ Troubleshooting

**Error: "API key not configured"**

* Check `.env.local` exists
* Verify `GEMINI_API_KEY` is set
* Restart dev server

---

**Error: "Failed to process request"**

* Check API key is valid
* Ensure Gemini API is enabled
* Check console logs for details

---

**UI looks broken**

* Run `npm install` again
* Clear browser cache
* Check browser console

---

## 📊 Testing Different Modes

**Beginner Mode:**
Paste simple code and see friendly explanations

**Detailed Mode:**

1. Toggle mode in header
2. Paste complex code
3. Get deep technical analysis

---

## 🎯 Example Prompts to Try

* "Review this React component for performance issues"
* "Why is my loop running infinitely?"
* "What's wrong with this SQL query?"
* "Explain this algorithm to me"
* "How can I make this code more readable?"

---

## 🧠 Note

This project uses **Gemini 2.5 Flash** for fast and cost-effective AI responses.
