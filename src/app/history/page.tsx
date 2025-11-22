'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  SearchIcon,
  MoreVerticalIcon,
  ChatBubbleIcon,
  LogoIcon,
  PlusIcon,
} from '@/components/icons';

interface Conversation {
  id: string;
  title: string;
  preview: string;
  messageCount: number;
  timestamp: Date;
  tags?: string[];
}

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'today' | 'week' | 'month'>('all');

  const [conversations] = useState<Conversation[]>([
    {
      id: '1',
      title: 'Story Ideas for Sci-Fi Novel',
      preview:
        'Discussing creative concepts for a science fiction novel including worldbuilding, character development, and plot structures...',
      messageCount: 15,
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      tags: ['creative writing', 'fiction'],
    },
    {
      id: '2',
      title: 'Python Data Analysis Help',
      preview:
        'Working through pandas dataframes, data visualization with matplotlib, and statistical analysis techniques...',
      messageCount: 23,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      tags: ['coding', 'python', 'data science'],
    },
    {
      id: '3',
      title: 'Weekend Activity Planning',
      preview:
        'Exploring fun weekend activities, restaurant recommendations, and outdoor adventure options in the local area...',
      messageCount: 8,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
      tags: ['planning', 'leisure'],
    },
    {
      id: '4',
      title: 'React Component Architecture',
      preview:
        'Discussing best practices for component structure, state management patterns, and performance optimization...',
      messageCount: 31,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      tags: ['coding', 'react', 'frontend'],
    },
    {
      id: '5',
      title: 'Marketing Strategy for Startup',
      preview:
        'Developing a comprehensive marketing plan including social media strategy, content marketing, and growth hacking...',
      messageCount: 19,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48),
      tags: ['business', 'marketing'],
    },
    {
      id: '6',
      title: 'Learn Machine Learning Basics',
      preview:
        'Introduction to ML concepts, neural networks, training models, and practical applications in real-world scenarios...',
      messageCount: 42,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72),
      tags: ['learning', 'AI', 'machine learning'],
    },
  ]);

  const formatDate = (date: Date): string => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000 / 60);

    if (diff < 60) return `${diff} minutes ago`;
    if (diff < 1440) return `${Math.floor(diff / 60)} hours ago`;
    if (diff < 10080) return `${Math.floor(diff / 1440)} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const filteredConversations = conversations.filter((conv) => {
    const matchesSearch =
      conv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    const now = new Date();
    const convDate = conv.timestamp;

    switch (selectedFilter) {
      case 'today':
        return now.toDateString() === convDate.toDateString();
      case 'week':
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        return convDate >= weekAgo;
      case 'month':
        const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        return convDate >= monthAgo;
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoIcon className="w-8 h-8 text-primary" />
            <span className="text-xl font-semibold">SYNAPSE AI</span>
          </div>
          <Link href="/chat">
            <Button variant="teal" size="pill">
              <PlusIcon className="w-4 h-4 mr-2" />
              New Chat
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Chat History</h1>
          <p className="text-muted-foreground text-lg">
            Browse and manage your conversation history
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative flex-1">
              <SearchIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search conversations, topics, or tags..."
                className="w-full pl-12 pr-4 py-3 border border-border rounded-xl bg-card focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              {(['all', 'today', 'week', 'month'] as const).map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? 'teal' : 'outline'}
                  size="default"
                  onClick={() => setSelectedFilter(filter)}
                  className="capitalize"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground">
            {filteredConversations.length} conversation{filteredConversations.length !== 1 ? 's' : ''}{' '}
            found
          </p>
        </div>

        {/* Conversations Grid */}
        {filteredConversations.length === 0 ? (
          <div className="text-center py-20">
            <ChatBubbleIcon className="w-16 h-16 text-muted-foreground/20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No conversations found</h3>
            <p className="text-muted-foreground mb-6">
              {searchQuery
                ? 'Try adjusting your search or filters'
                : "You haven't started any conversations yet"}
            </p>
            <Link href="/chat">
              <Button variant="teal" size="pill">
                Start Your First Chat
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConversations.map((conv) => (
              <Link key={conv.id} href={`/chat?id=${conv.id}`}>
                <div className="bg-card rounded-2xl p-6 shadow hover:shadow-md transition-all border border-border hover:border-primary group cursor-pointer">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <ChatBubbleIcon className="w-5 h-5 text-primary" />
                      <span className="text-xs text-muted-foreground">
                        {conv.messageCount} messages
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        // Handle menu action
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <MoreVerticalIcon className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {conv.title}
                  </h3>

                  {/* Preview */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {conv.preview}
                  </p>

                  {/* Tags */}
                  {conv.tags && conv.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {conv.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{formatDate(conv.timestamp)}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                      Open →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Export/Manage Section */}
        {filteredConversations.length > 0 && (
          <div className="mt-12 p-8 bg-card rounded-2xl border border-border">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Manage Your Conversations</h3>
                <p className="text-muted-foreground">
                  Export, organize, or delete your chat history
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="default">
                  Export All
                </Button>
                <Button variant="outline" size="default">
                  Organize
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
