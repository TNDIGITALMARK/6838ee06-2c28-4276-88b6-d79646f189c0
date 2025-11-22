# Synapse AI - AI Chat Assistant Platform

A modern, pixel-perfect AI chat assistant platform built with Next.js 15, TypeScript, and Tailwind CSS. Replicates ChatGPT's functionality with a clean, intuitive interface.

## 🚀 Features

### Core Functionality
- **Landing Page** - Hero section with features showcase and live chat demo
- **Main Chat Interface** - Real-time AI conversations with typing indicators
- **Chat History Dashboard** - Search, filter, and manage conversations
- **Responsive Design** - Mobile-first, works on all devices

### Design System
- **Teal Primary Color** (#2DBFAF) with dark gray sidebar (#2C3E50)
- **Inter Font Family** - Modern, professional typography
- **Pill-shaped Buttons** - Distinctive rounded CTAs
- **Card-based Layout** - Clean, organized content presentation

## 📁 Project Structure

```
src/
├── app/
│   ├── (landing)/         # Landing page
│   ├── chat/              # Main chat interface
│   ├── history/           # Chat history dashboard
│   └── globals.css        # Design system & global styles
├── components/
│   ├── ui/                # Reusable UI components
│   └── icons.tsx          # Custom SVG icons
└── lib/
    └── utils.ts           # Utility functions
```

## 🎯 Pages

**Landing Page** (`/(landing)/page.tsx`)
- Hero with value proposition
- Features showcase
- Live chat demo
- CTA sections

**Chat Interface** (`/chat/page.tsx`)
- Message exchange with AI
- Typing indicators
- Conversation sidebar
- Search & new chat

**History Dashboard** (`/history/page.tsx`)
- Conversation grid
- Search & filters
- Tag system
- Export tools

## 🎨 Design System

### Colors
```css
Primary Teal: #2DBFAF (HSL: 174 65% 47%)
Dark Sidebar: #2C3E50 (HSL: 210 29% 24%)
Background: #F5F5F5 (HSL: 0 0% 96%)
Cards: #FFFFFF (HSL: 0 0% 100%)
```

### Typography
```css
Font: Inter (400, 500, 600, 700)
H1: 48px - Hero headlines
H2: 32px - Section titles
H3: 24px - Card titles
Body: 16px - Main content
```

### Components
- **Buttons**: Pill-shaped (24px radius), teal with shadow
- **Cards**: White, 16px radius, subtle shadow
- **Messages**: 24px radius, right/left aligned

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:4006
```

## 🤖 AI Features

The chat interface includes simulated AI responses for:
- Creative writing assistance
- Code debugging help
- Learning & explanations
- General conversation

Responses are context-aware and adapt to user input.

## 📊 Mock Data

Demo includes:
- Sample conversation history
- Simulated AI responses
- Realistic typing delays
- Relative timestamps

## 🔮 Future Enhancements

- Real AI integration (OpenAI, Anthropic)
- User authentication
- Supabase persistence
- Voice input/output
- File attachments
- Conversation export
- Premium features

## 📱 Technical Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Component primitives
- **Lucide Icons** - Icon system

## ♿ Accessibility

- Keyboard navigation
- ARIA labels
- Screen reader support
- Focus indicators
- High contrast support
