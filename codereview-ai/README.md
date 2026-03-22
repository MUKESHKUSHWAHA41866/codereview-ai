# 🤖 CodeReview AI



> Your friendly AI code review assistant built with Next.js 14 and Claude Sonnet 4.5

┌─────────────────────────────────────────────────────────────┐
│                         USER INTERFACE                       │
│  (Next.js App Router - app/page.tsx)                        │
└─────────────────────────────────────────────────────────────┘
                           ↓ ↑
┌─────────────────────────────────────────────────────────────┐
│                    CHAT COMPONENT LAYER                      │
│  - ChatContainer (manages state)                            │
│  - MessageList (renders messages)                           │
│  - ChatInput (handles user input)                           │
│  - CodeBlock (syntax highlighting)                          │
└─────────────────────────────────────────────────────────────┘
                           ↓ ↑
┌─────────────────────────────────────────────────────────────┐
│                      STATE MANAGEMENT                        │
│  - useChat hook (message history, loading states)           │
│  - Settings Context (beginner/detailed mode)                │
└─────────────────────────────────────────────────────────────┘
                           ↓ ↑
┌─────────────────────────────────────────────────────────────┐
│                         API LAYER                            │
│  app/api/chat/route.ts                                      │
│  - Receives messages                                         │
│  - Calls Claude API                                          │
│  - Streams response back                                     │
└─────────────────────────────────────────────────────────────┘
                           ↓ ↑
┌─────────────────────────────────────────────────────────────┐
│                      Gemini API                              │
│  (Gemini Messages API with streaming)                        │
└───────────────────────────────────────────────────────── ────┘


1. USER TYPES MESSAGE
   ↓
2. ChatInput → useChat hook
   ↓
3. Optimistic UI update (show user message immediately)
   ↓
4. POST to /api/chat with message + history
   ↓
5. API Route constructs system prompt + user context
   ↓
6. Stream response from gemini API
   ↓
7. Parse stream chunks → update UI in real-time
   ↓
8. Display formatted response with syntax highlighting

![CodeReview AI](https://img.shields.io/badge/AI-Claude%20Sonnet%204.5-blueviolet)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## 🎯 What is CodeReview AI?

CodeReview AI is a purpose-built chatbot that helps developers write better code through instant, helpful code reviews. Unlike generic chat wrappers, it's designed specifically for code review with:

- **Dual explanation modes**: Beginner-friendly or technically detailed
- **Syntax highlighting** with copy-to-clipboard
- **Context-aware suggestions** based on your code
- **VS Code-inspired dark theme** familiar to developers

## 🚀 Why This Topic?

I chose code review because:

1. **Real developer pain point**: Junior devs don't have 24/7 access to senior reviews
2. **Natural fit for chat**: Code review is conversational by nature
3. **Demonstrates AI strength**: Claude excels at code analysis and teaching
4. **Product differentiation**: Not just "chat with AI" - purpose-built UX

## ✨ Key Features

### 🎨 Product Features
- **Empty state with quick actions** - Zero friction to get started
- **Two explanation modes** - Adapts to user's skill level
- **Code block parsing** - Auto-detects and highlights code in messages
- **Copy code functionality** - One-click copy from any code block
- **Responsive design** - Works on desktop, tablet, and mobile
- **Error handling** - Graceful failures with helpful messages

### 🧠 AI Features
- **Context-aware prompts** - Different system prompts for beginner/detailed modes
- **Code-specific training** - Prompts optimized for code review tasks
- **Helpful tone** - Encourages learning without being condescending

## 🛠️ Tech Stack

```
Frontend:     Next.js 14 (App Router) + TypeScript
Styling:      Tailwind CSS
AI Model:     gemini-2.5-flash (Google Generative AI)
Syntax:       react-syntax-highlighter
Icons:        lucide-react
Deployment:   Vercel
```

## 📁 Project Structure

```
codereview-ai/
├── app/
│   ├── api/chat/route.ts      # API endpoint for Claude
│   ├── layout.tsx             # Root layout with metadata
│   ├── page.tsx               # Main chat page
│   └── globals.css            # Global styles
├── components/
│   ├── chat/
│   │   ├── ChatContainer.tsx  # Main orchestrator
│   │   ├── ChatHeader.tsx     # Header with settings
│   │   ├── MessageList.tsx    # Message display
│   │   ├── Message.tsx        # Individual message
│   │   ├── CodeBlock.tsx      # Syntax-highlighted code
│   │   ├── ChatInput.tsx      # Input with send button
│   │   └── QuickActions.tsx   # Suggestion chips
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   └── LoadingDots.tsx
│   └── EmptyState.tsx         # Welcome screen
├── contexts/
│   └── SettingsContext.tsx    # Global settings
├── hooks/
│   ├── useChat.ts             # Chat logic
│   └── useAutoScroll.ts       # Auto-scroll behavior
├── lib/
│   ├── prompts.ts             # System prompts
│   └── utils.ts               # Helper functions
└── types/
    └── index.ts               # TypeScript definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Gemini  API key ([Get one here]())

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd codereview-ai
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API key:
```
GEMINI_API_KEY=your_actual_api_key_here
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment (Vercel)

### Option 1: Deploy via Vercel Dashboard

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variable:
   - Key: `GEMINI_API_KEY`
   - Value: Your API key
6. Click "Deploy"

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variable
vercel env add GEMINI_API_KEY

# Deploy to production
vercel --prod
```

## 🤖 How I Used AI

### AI Tools Used
- **Claude (via Claude.ai)**: Architecture planning, code generation, debugging
- **GitHub Copilot**: Auto-completion for repetitive code patterns

### My Process
1. **Planning**: Used Claude to brainstorm chatbot ideas and choose the best one
2. **Architecture**: Discussed tech stack decisions and folder structure
3. **Implementation**: Generated components step-by-step, reviewed each piece
4. **Refinement**: Asked Claude to improve UX details (animations, error states)
5. **Debugging**: Used Claude to troubleshoot TypeScript errors and API issues

### What I Learned
- AI is excellent for boilerplate and structure, but **I made all product decisions**
- Iterative prompting (ask → review → refine) produces better code than one-shot
- Understanding the output is crucial - I read every line generated
- AI struggles with context between files - I had to connect pieces manually

## 💡 Key Decisions

### Why Gemini over Claude/OpenAI?

- Faster response time (Gemini 2.5 Flash)
- Cost-effective for production usage
- Simplified integration for this project
- Flexibility to switch models easily

### Why Two Explanation Modes?
- Real user research: Beginners need different language than experts
- Shows product thinking beyond just "build a chat"
- Demonstrates prompt engineering skills

### Why No Streaming?
- Simpler implementation for time-constrained assignment
- Focus on UX polish over technical complexity
- Easy to add later as an enhancement

### Design Choices
- **VS Code theme**: Familiar to developers, professional
- **Empty state focus**: First impression matters most
- **Quick actions**: Reduces friction, guides users
- **Copy buttons on code**: Developers expect this

 

## 🐛 Known Limitations

- No conversation persistence (resets on page reload)
- No streaming responses (could improve perceived speed)
- No rate limiting (could be abused)
- No conversation history/export feature

## 🚀 Future Enhancements

- [ ] Add streaming responses for better UX
- [ ] Implement conversation persistence (localStorage)
- [ ] Add code diff visualization
- [ ] Create "save review" functionality
- [ ] Add support for multiple languages
- [ ] Implement rate limiting
- [ ] Add dark/light theme toggle

## 📝 License

MIT License - feel free to use this for learning!

## 👨‍💻 Author

Built by [Your Name] for Thinkly Labs Software Engineering Role

---

**Feedback?** I'd love to hear your thoughts on the code, UX, or AI usage! 🚀
The AI provider layer is abstracted, allowing easy switching between providers (Claude, OpenAI, Gemini).
