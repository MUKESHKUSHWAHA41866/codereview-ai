# 🚀 Quick Start Guide

## Setup in 5 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Get Your API Key
1. Go to https://console.anthropic.com/
2. Sign up or log in
3. Navigate to "API Keys"
4. Create a new key
5. Copy it

### 3️⃣ Configure Environment
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```
ANTHROPIC_API_KEY=sk-ant-api03-xxxxx
```

### 4️⃣ Run Development Server
```bash
npm run dev
```

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

## 🌐 Deploy to Vercel

### Quick Deploy
```bash
npm i -g vercel
vercel login
vercel
```

Add environment variable in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add `ANTHROPIC_API_KEY` with your key
- Redeploy

## ⚡ Troubleshooting

**Error: "API key not configured"**
- Check `.env.local` exists
- Verify `ANTHROPIC_API_KEY` is set
- Restart dev server

**Error: "Failed to process request"**
- Check API key is valid
- Verify you have API credits
- Check console for detailed errors

**UI looks broken**
- Run `npm install` again
- Clear browser cache
- Check browser console for errors

## 📊 Testing Different Modes

**Beginner Mode:**
Paste simple code and see friendly, educational responses

**Detailed Mode:**
1. Click settings toggle in header
2. Select "🚀 Detailed Mode"
3. Paste complex code for technical analysis

## 🎯 Example Prompts to Try

- "Review this React component for performance issues"
- "Why is my loop running infinitely?"
- "What's wrong with this SQL query?"
- "Explain this algorithm to me"
- "How can I make this code more readable?"

Need help? Check the main README.md!
