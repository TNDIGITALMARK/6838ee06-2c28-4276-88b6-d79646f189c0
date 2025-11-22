'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  SendIcon,
  PlusIcon,
  SearchIcon,
  MoreVerticalIcon,
  UserIcon,
  LogoIcon,
  ChatBubbleIcon
} from '@/components/icons';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [conversations] = useState<Conversation[]>([
    {
      id: '1',
      title: 'Story Ideas for Sci-Fi Novel',
      lastMessage: 'Here are some creative concepts...',
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
    },
    {
      id: '2',
      title: 'Python Data Analysis Help',
      lastMessage: 'You can use pandas for that...',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
    {
      id: '3',
      title: 'Weekend Activity Planning',
      lastMessage: 'Consider these fun options...',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
    },
  ]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('code') || lowerInput.includes('programming')) {
      return "I'd be happy to help with coding! I can assist with multiple programming languages including Python, JavaScript, TypeScript, and more. What specific coding challenge can I help you with?";
    } else if (lowerInput.includes('write') || lowerInput.includes('story')) {
      return "Creative writing is one of my strengths! Whether you need help brainstorming ideas, developing characters, or crafting compelling narratives, I'm here to help. What kind of writing project are you working on?";
    } else if (lowerInput.includes('learn') || lowerInput.includes('explain')) {
      return "I love helping people learn! I can break down complex topics into simple, understandable explanations. What would you like to learn about today?";
    } else {
      return "That's an interesting question! I'm here to help with a wide range of topics including writing, coding, problem-solving, learning, and general conversation. Could you tell me more about what you'd like to explore?";
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000 / 60);

    if (diff < 1) return 'Just now';
    if (diff < 60) return `${diff} minutes ago`;
    if (diff < 1440) return `${Math.floor(diff / 60)} hours ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="w-64 bg-secondary text-secondary-foreground flex flex-col border-r border-sidebar-border">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-sidebar-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <LogoIcon className="w-6 h-6 text-sidebar-primary" />
                <span className="font-semibold text-white">Synapse AI</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-sidebar-accent"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="text-xl">×</span>
              </Button>
            </div>
            <Button
              variant="teal"
              size="sm"
              className="w-full"
              onClick={() => setMessages([{
                id: Date.now().toString(),
                role: 'assistant',
                content: "Hello! I'm your AI assistant. How can I help you today?",
                timestamp: new Date(),
              }])}
            >
              <PlusIcon className="w-4 h-4 mr-2" />
              New Chat
            </Button>
          </div>

          {/* Search */}
          <div className="p-4">
            <div className="relative">
              <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 bg-sidebar-accent text-white placeholder-white/60 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sidebar-primary"
              />
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto px-4 space-y-2">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className="group p-3 hover:bg-sidebar-accent rounded-lg cursor-pointer transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-white truncate">
                      {conv.title}
                    </h4>
                    <p className="text-xs text-white/60 truncate mt-1">
                      {conv.lastMessage}
                    </p>
                    <p className="text-xs text-white/40 mt-1">
                      {formatTime(conv.timestamp)}
                    </p>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 text-white/60 hover:text-white transition-opacity">
                    <MoreVerticalIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* User Profile */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-sidebar-accent rounded-full flex items-center justify-center">
                <UserIcon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">User</p>
                <p className="text-xs text-white/60">Free Plan</p>
              </div>
              <button className="text-white/60 hover:text-white">
                <MoreVerticalIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
          {!sidebarOpen && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(true)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          )}
          <div className="flex items-center gap-2">
            <ChatBubbleIcon className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">AI Assistant</h2>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <MoreVerticalIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
          {messages.length === 0 && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <ChatBubbleIcon className="w-16 h-16 text-muted-foreground/20 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Start a conversation</h3>
                <p className="text-muted-foreground">
                  Ask me anything! I'm here to help with writing, coding, learning, and more.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 max-w-2xl">
                  {[
                    'Help me write a story',
                    'Explain quantum computing',
                    'Debug my Python code',
                    'Plan my weekend',
                  ].map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => setInputValue(prompt)}
                      className="p-4 text-left bg-card border border-border rounded-xl hover:border-primary transition-colors"
                    >
                      <p className="text-sm">{prompt}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-2xl rounded-2xl px-6 py-3 ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground ml-auto'
                    : 'bg-muted/50 text-foreground'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </p>
                <p
                  className={`text-xs mt-2 ${
                    message.role === 'user' ? 'text-primary-foreground/60' : 'text-muted-foreground'
                  }`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-muted/50 rounded-2xl px-6 py-4">
                <div className="flex gap-1">
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: '0ms' }}
                  />
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: '150ms' }}
                  />
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: '300ms' }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-border bg-card px-6 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-6 py-3 border border-border rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <Button
                variant="teal"
                size="icon"
                className="w-12 h-12 rounded-full flex-shrink-0"
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
              >
                <SendIcon className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              AI can make mistakes. Check important information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
