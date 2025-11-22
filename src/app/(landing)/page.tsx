import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BrainIcon, ShieldCheckIcon, ZapIcon, ChatBubbleIcon, LogoIcon } from '@/components/icons';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoIcon className="w-8 h-8 text-primary" />
            <span className="text-xl font-semibold">SYNAPSE AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Use Cases
            </Link>
            <Link href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
          </nav>
          <Link href="/chat">
            <Button variant="teal" size="pill">
              Sign Up
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Unlock Your Potential with AI Conversation
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Experience intelligent, reliable, and efficient assistance for all your needs
            </p>
            <Link href="/chat">
              <Button variant="teal" size="pill" className="text-lg">
                Start Free Trial
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 shadow-md">
              <ChatBubbleIcon className="w-32 h-32 text-primary mx-auto opacity-20" />
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 bg-muted/50 rounded-2xl p-4">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">AI is thinking...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-center text-4xl font-bold mb-16">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-card rounded-2xl p-8 shadow hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6">
              <BrainIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Intelligent Assistance</h3>
            <p className="text-muted-foreground">
              Experience cutting-edge AI that understands context and provides thoughtful responses
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-card rounded-2xl p-8 shadow hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6">
              <ShieldCheckIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
            <p className="text-muted-foreground">
              Your conversations are protected with enterprise-grade security and privacy
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-card rounded-2xl p-8 shadow hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6">
              <ZapIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Instant Solutions</h3>
            <p className="text-muted-foreground">
              Get immediate answers and solutions without delays or waiting
            </p>
          </div>
        </div>
      </section>

      {/* AI Chat Demo Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-center text-4xl font-bold mb-16">AI Chat in Action</h2>
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-md overflow-hidden">
            <div className="grid md:grid-cols-[250px_1fr]">
              {/* Sidebar */}
              <div className="bg-secondary text-secondary-foreground p-6">
                <h3 className="font-semibold mb-4 text-white">Recent Chats</h3>
                <div className="space-y-2">
                  {[
                    'Project Alpha',
                    'Project agave',
                    'Q3 Report Analysis',
                    'Code Debugging',
                  ].map((chat, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 rounded-lg hover:bg-sidebar-accent cursor-pointer text-sm text-white/90"
                    >
                      {chat}
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 px-4 py-2 bg-sidebar-accent rounded-lg text-sm text-white hover:bg-sidebar-accent/80 transition-colors">
                  + Chat Debuging
                </button>
              </div>

              {/* Chat Area */}
              <div className="p-8">
                <div className="space-y-6">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-2xl px-6 py-3 max-w-md">
                      <p className="text-sm">Explain quantum computing simply</p>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="bg-muted/50 rounded-2xl px-6 py-3 max-w-md">
                      <p className="text-sm text-foreground">
                        Quantum computers use quantum bits or "qubits" that can exist in multiple states at once, allowing them to process vast amounts of information simultaneously...
                      </p>
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                    <span className="text-sm">Explain quantum computing simply & intuitively</span>
                  </div>
                </div>

                <div className="mt-8 flex gap-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 border border-border rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    disabled
                  />
                  <button className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <ChatBubbleIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Chat Synapse enhances forward-thinking businesses with advanced AI conversational tools
          </p>
          <Link href="/chat">
            <Button variant="secondary" size="pill" className="text-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LogoIcon className="w-6 h-6 text-primary" />
                <span className="font-semibold">SYNAPSE AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered conversations for everyone
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Features</Link></li>
                <li><Link href="#" className="hover:text-foreground">Pricing</Link></li>
                <li><Link href="#" className="hover:text-foreground">Use Cases</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">About</Link></li>
                <li><Link href="#" className="hover:text-foreground">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-foreground">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-foreground">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Synapse AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
