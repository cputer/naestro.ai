"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

// Header Component
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-[#27272a]/50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="text-lg font-semibold tracking-tight group-hover:text-blue-400 transition-colors">
            Naestro
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
          >
            Features
          </a>
          <a
            href="#technology"
            className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
          >
            Technology
          </a>
          <a
            href="#contact"
            className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
          >
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="hidden sm:inline-flex h-10 px-5 items-center justify-center rounded-full bg-[#fafafa] text-[#0a0a0f] text-sm font-medium hover:bg-[#e4e4e7] transition-colors"
        >
          Get Started
        </a>
        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-[#71717a] hover:text-[#fafafa]">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
      {/* Accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-subtle" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="opacity-0 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#18181b] border border-[#27272a] text-sm text-[#71717a] mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Powered by MIND Language
          </span>
        </div>

        <h1 className="opacity-0 animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Intelligent Governance
          <br />
          <span className="gradient-text">Automated Excellence</span>
        </h1>

        <p className="opacity-0 animate-fade-in-up delay-200 max-w-2xl mx-auto text-lg sm:text-xl text-[#71717a] mb-10 leading-relaxed">
          Transform your decision-making with AI-driven automation. Naestro
          optimizes business processes and multi-wave PR systems with
          unprecedented precision.
        </p>

        <div className="opacity-0 animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex h-12 px-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-all hover:scale-105 glow-hover"
          >
            Request a Demo
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex h-12 px-8 items-center justify-center rounded-full border border-[#27272a] text-[#fafafa] text-sm font-medium hover:bg-[#18181b] transition-colors"
          >
            Explore Features
          </a>
        </div>

        {/* Stats */}
        <div className="opacity-0 animate-fade-in-up delay-400 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "50ms", label: "Avg Response" },
            { value: "10x", label: "Faster Decisions" },
            { value: "24/7", label: "AI Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#fafafa]">
                {stat.value}
              </div>
              <div className="text-sm text-[#71717a] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-600">
        <div className="w-6 h-10 rounded-full border-2 border-[#27272a] flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-[#71717a] animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          entry.target.classList.remove("opacity-0");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 ${delay} p-8 rounded-2xl bg-[#18181b]/50 border border-[#27272a] hover:border-[#3f3f46] transition-all duration-300 hover:-translate-y-1 glow-hover group`}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-700/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-[#71717a] leading-relaxed">{description}</p>
    </div>
  );
}

// Features Section
function Features() {
  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Intelligent Automation",
      description:
        "Automate complex business processes with AI that learns and adapts to your organization's unique patterns and requirements.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Real-time Decisions",
      description:
        "Make data-driven decisions in milliseconds with our advanced processing engine that analyzes patterns across your entire operation.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Secure Governance",
      description:
        "Enterprise-grade security with comprehensive audit trails, compliance monitoring, and role-based access control built-in.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
      title: "MIND Language",
      description:
        "Our proprietary language enables intuitive rule definition and complex logic expression for sophisticated automation workflows.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Analytics Dashboard",
      description:
        "Comprehensive insights into your automation performance with real-time metrics, trend analysis, and predictive forecasting.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "API Integration",
      description:
        "Seamlessly connect with your existing tools through our robust API. Support for REST, GraphQL, and custom webhooks.",
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Built for the Future
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#71717a]">
            Powerful capabilities designed to transform how organizations
            operate and make decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={`delay-${(index + 1) * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Technology Section
function Technology() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          entry.target.classList.remove("opacity-0");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="technology" className="py-24 lg:py-32 relative bg-[#0f0f14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className="opacity-0 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left content */}
          <div>
            <span className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4 block">
              Technology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              The MIND Language
            </h2>
            <p className="text-lg text-[#71717a] mb-8 leading-relaxed">
              Our proprietary programming language enables intuitive expression
              of complex business logic. MIND bridges the gap between technical
              implementation and business requirements, making automation
              accessible to everyone.
            </p>
            <ul className="space-y-4">
              {[
                "Human-readable syntax for complex rules",
                "Built-in optimization algorithms",
                "Native support for multi-wave processing",
                "Real-time validation and error handling",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-blue-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#a1a1aa]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right content - Code preview */}
          <div className="relative">
            <div className="rounded-2xl bg-[#18181b] border border-[#27272a] overflow-hidden">
              {/* Code window header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#27272a]">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <div className="w-3 h-3 rounded-full bg-[#eab308]" />
                <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                <span className="ml-3 text-xs text-[#71717a] font-mono">
                  workflow.mind
                </span>
              </div>
              {/* Code content */}
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <pre className="text-[#71717a]">
                  <code>
                    <span className="text-blue-400">rule</span>{" "}
                    <span className="text-[#fafafa]">ProcessApproval</span>
                    {" {\n"}
                    {"  "}
                    <span className="text-purple-400">when</span>
                    {" {\n"}
                    {"    "}
                    <span className="text-[#a1a1aa]">
                      request.amount {">"} threshold
                    </span>
                    {"\n"}
                    {"    "}
                    <span className="text-blue-400">and</span>{" "}
                    <span className="text-[#a1a1aa]">
                      user.role == &quot;manager&quot;
                    </span>
                    {"\n"}
                    {"  }\n"}
                    {"  "}
                    <span className="text-purple-400">then</span>
                    {" {\n"}
                    {"    "}
                    <span className="text-green-400">approve</span>
                    {"(request)\n"}
                    {"    "}
                    <span className="text-green-400">notify</span>
                    {"(stakeholders)\n"}
                    {"  }\n"}
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-blue-500/5 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer id="contact" className="py-16 lg:py-24 border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Naestro
              </span>
            </Link>
            <p className="text-[#71717a] text-sm leading-relaxed mb-6">
              AI-driven platform for intelligent governance and automation.
              Transform your decision-making today.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#71717a] hover:text-[#fafafa] hover:border-[#3f3f46] transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#71717a] hover:text-[#fafafa] hover:border-[#3f3f46] transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#71717a] hover:text-[#fafafa] hover:border-[#3f3f46] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Documentation", "API Reference"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@naestro.ai"
                  className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
                >
                  hello@naestro.ai
                </a>
              </li>
              <li>
                <span className="text-sm text-[#71717a]">
                  San Francisco, CA
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              Schedule a demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#27272a] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#71717a]">
            &copy; {new Date().getFullYear()} Naestro. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />
      <main>
        <Hero />
        <Features />
        <Technology />
      </main>
      <Footer />
    </div>
  );
}
