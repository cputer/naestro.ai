"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

// Header Component
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-[#27272a]/50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <svg className="w-8 h-8" viewBox="0 0 300 276" fill="#ffffff">
            <g transform="translate(0,276) scale(0.1,-0.1)">
              <path d="M2242 2653 c-11 -10 -143 -238 -295 -508 -249 -446 -829 -1480 -981 -1750 -77 -137 -86 -158 -86 -198 1 -51 49 -97 102 -97 55 0 81 32 167 201 46 90 166 322 266 514 100 193 303 584 450 870 147 286 313 606 368 710 59 112 100 202 100 219 0 50 -52 72 -91 39z" />
              <path d="M634 2591 c-147 -24 -260 -120 -305 -260 -20 -60 -22 -92 -24 -356 -2 -169 -8 -304 -14 -324 -23 -75 -94 -141 -152 -141 -13 0 -34 -3 -46 -6 -23 -6 -23 -9 -23 -150 l0 -144 48 0 c72 0 130 -34 162 -95 24 -48 25 -57 31 -310 7 -277 14 -324 64 -410 45 -78 185 -185 242 -185 13 0 37 36 85 128 l67 127 -52 25 c-91 44 -93 49 -101 346 -9 310 -18 352 -96 437 -28 30 -69 64 -92 76 l-42 20 37 16 c78 32 138 108 172 215 14 45 18 107 22 335 4 218 8 285 19 302 27 42 71 56 192 61 l112 5 0 143 0 144 -53 0 c-30 0 -87 2 -128 4 -41 3 -97 1 -125 -3z" />
              <path d="M2393 2401 c-35 -66 -63 -126 -63 -134 0 -9 9 -19 20 -22 11 -4 28 -18 38 -33 15 -23 18 -65 22 -347 5 -307 6 -322 28 -370 27 -59 61 -98 120 -135 l42 -28 -44 -26 c-24 -14 -56 -40 -70 -57 -71 -84 -85 -151 -95 -444 -9 -274 -12 -288 -81 -322 -37 -19 -60 -23 -142 -23 l-98 0 0 -146 0 -146 163 4 c152 3 166 5 220 30 115 54 180 128 219 251 17 52 22 103 28 312 5 144 13 267 20 290 16 53 76 112 120 119 19 3 52 8 73 11 l37 6 0 134 0 135 -28 0 c-16 0 -51 7 -79 15 -46 14 -62 26 -115 88 -1 1 -4 164 -7 362 -6 352 -7 361 -30 413 -14 31 -43 69 -70 93 -46 41 -129 89 -153 89 -7 0 -41 -54 -75 -119z" />
            </g>
          </svg>
          <span className="text-lg font-semibold tracking-tight group-hover:text-blue-400 transition-colors">
            NAESTRO
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
            href="#architecture"
            className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
          >
            Architecture
          </a>
          <a
            href="#technology"
            className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
          >
            MIND Language
          </a>
          <a
            href="#docs"
            className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
          >
            Documentation
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
          Request Demo
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
        {/* Large Logo */}
        <div className="opacity-0 animate-fade-in-up mb-8">
          <svg className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto" viewBox="0 0 300 276" fill="#ffffff">
            <g transform="translate(0,276) scale(0.1,-0.1)">
              <path d="M2242 2653 c-11 -10 -143 -238 -295 -508 -249 -446 -829 -1480 -981 -1750 -77 -137 -86 -158 -86 -198 1 -51 49 -97 102 -97 55 0 81 32 167 201 46 90 166 322 266 514 100 193 303 584 450 870 147 286 313 606 368 710 59 112 100 202 100 219 0 50 -52 72 -91 39z" />
              <path d="M634 2591 c-147 -24 -260 -120 -305 -260 -20 -60 -22 -92 -24 -356 -2 -169 -8 -304 -14 -324 -23 -75 -94 -141 -152 -141 -13 0 -34 -3 -46 -6 -23 -6 -23 -9 -23 -150 l0 -144 48 0 c72 0 130 -34 162 -95 24 -48 25 -57 31 -310 7 -277 14 -324 64 -410 45 -78 185 -185 242 -185 13 0 37 36 85 128 l67 127 -52 25 c-91 44 -93 49 -101 346 -9 310 -18 352 -96 437 -28 30 -69 64 -92 76 l-42 20 37 16 c78 32 138 108 172 215 14 45 18 107 22 335 4 218 8 285 19 302 27 42 71 56 192 61 l112 5 0 143 0 144 -53 0 c-30 0 -87 2 -128 4 -41 3 -97 1 -125 -3z" />
              <path d="M2393 2401 c-35 -66 -63 -126 -63 -134 0 -9 9 -19 20 -22 11 -4 28 -18 38 -33 15 -23 18 -65 22 -347 5 -307 6 -322 28 -370 27 -59 61 -98 120 -135 l42 -28 -44 -26 c-24 -14 -56 -40 -70 -57 -71 -84 -85 -151 -95 -444 -9 -274 -12 -288 -81 -322 -37 -19 -60 -23 -142 -23 l-98 0 0 -146 0 -146 163 4 c152 3 166 5 220 30 115 54 180 128 219 251 17 52 22 103 28 312 5 144 13 267 20 290 16 53 76 112 120 119 19 3 52 8 73 11 l37 6 0 134 0 135 -28 0 c-16 0 -51 7 -79 15 -46 14 -62 26 -115 88 -1 1 -4 164 -7 362 -6 352 -7 361 -30 413 -14 31 -43 69 -70 93 -46 41 -129 89 -153 89 -7 0 -41 -54 -75 -119z" />
            </g>
          </svg>
        </div>

        <div className="opacity-0 animate-fade-in-up delay-100">
          <a
            href="https://mindlang.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#18181b] border border-[#27272a] text-sm text-[#71717a] mb-8 hover:border-blue-500/50 hover:text-[#fafafa] transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Powered by MIND Language
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        <h1 className="opacity-0 animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          META Brain
          <br />
          <span className="gradient-text">Pre-ASI Operating System</span>
        </h1>

        <p className="opacity-0 animate-fade-in-up delay-200 max-w-3xl mx-auto text-lg sm:text-xl text-[#71717a] mb-10 leading-relaxed">
          Naestro is the world&apos;s first META brain operating system designed to
          orchestrate and control all existing and future AI technologies. Seamlessly
          integrate complex business logic through MIND Language&apos;s human-readable syntax.
        </p>

        <div className="opacity-0 animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex h-12 px-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-all hover:scale-105 glow-hover"
          >
            Request a Demo
          </a>
          <a
            href="#architecture"
            className="w-full sm:w-auto inline-flex h-12 px-8 items-center justify-center rounded-full border border-[#27272a] text-[#fafafa] text-sm font-medium hover:bg-[#18181b] transition-colors"
          >
            Explore Architecture
          </a>
        </div>

        {/* Stats */}
        <div className="opacity-0 animate-fade-in-up delay-400 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "100%", label: "AI Control" },
            { value: "∞", label: "Model Support" },
            { value: "Real-time", label: "Orchestration" },
            { value: "Universal", label: "Compatibility" },
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
      title: "Universal AI Control",
      description:
        "Control every AI technology that exists or will ever exist. Naestro acts as the central orchestrator for all AI-driven models, devices, and services.",
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
      title: "Real-time Orchestration",
      description:
        "Seamlessly coordinate multiple AI agents, models, and services in real-time with our advanced Agent Kernel and routing engine.",
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
      title: "Policy Engine",
      description:
        "Enterprise-grade governance with comprehensive policy enforcement, audit trails, and role-based access control for all AI operations.",
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
        "Human-readable syntax for expressing complex AI orchestration logic. Bridge the gap between technical implementation and business requirements.",
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
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
      title: "Multi-wave Processing",
      description:
        "Native support for processing multiple waves of data and AI models simultaneously with built-in optimization algorithms.",
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
      title: "API & Integrations",
      description:
        "Powerful APIs for workflows, automation, and agent coordination. Connect with any AI service through our universal adapter layer.",
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Control Every AI
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#71717a]">
            Naestro&apos;s modular architecture enables seamless orchestration of all
            AI technologies through a unified control layer.
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

// Architecture Section
function Architecture() {
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

  const components = [
    { name: "Naestro Core", desc: "Central orchestration engine" },
    { name: "Agent Kernel", desc: "AI agent coordination layer" },
    { name: "Planner", desc: "Strategic execution planning" },
    { name: "Router", desc: "Intelligent request routing" },
    { name: "Policy Engine", desc: "Governance & compliance" },
    { name: "MIND Runtime", desc: "Language execution environment" },
  ];

  return (
    <section id="architecture" className="py-24 lg:py-32 relative bg-[#0f0f14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="opacity-0">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4 block">
              Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Naestro System Architecture
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-[#71717a]">
              A modular, scalable architecture designed for universal AI orchestration
              and control.
            </p>
          </div>

          {/* Architecture diagram */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {components.map((comp, index) => (
              <div
                key={comp.name}
                className="p-6 rounded-xl bg-[#18181b] border border-[#27272a] hover:border-blue-500/50 transition-all group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <h3 className="font-semibold text-[#fafafa] group-hover:text-blue-400 transition-colors">
                    {comp.name}
                  </h3>
                </div>
                <p className="text-sm text-[#71717a] ml-6">{comp.desc}</p>
              </div>
            ))}
          </div>

          {/* Connection visualization */}
          <div className="mt-12 p-8 rounded-2xl bg-[#18181b]/50 border border-[#27272a]">
            <div className="text-center">
              <p className="text-[#71717a] mb-4">
                All components work in harmony through the Agent Kernel, enabling:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Multi-agent coordination",
                  "Dynamic routing",
                  "Policy enforcement",
                  "Real-time validation",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
    <section id="technology" className="py-24 lg:py-32 relative">
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
              MIND bridges the gap between technical implementation and business
              requirements, making AI orchestration accessible to everyone. Express
              complex automation logic with intuitive, human-readable syntax.
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
            <a
              href="https://mindlang.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Learn more at mindlang.dev
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
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

// Documentation Section
function Documentation() {
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

  const resources = [
    {
      title: "Getting Started",
      description: "Quick start guide to deploying Naestro",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "API Reference",
      description: "Complete API documentation for developers",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "MIND Language Docs",
      description: "Learn the MIND programming language",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "GitHub Repository",
      description: "Source code and contributions",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="docs" className="py-24 lg:py-32 relative bg-[#0f0f14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="opacity-0">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4 block">
              Resources
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Documentation
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-[#71717a]">
              Everything you need to get started with Naestro and master AI orchestration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href="#"
                className="p-6 rounded-xl bg-[#18181b] border border-[#27272a] hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  {resource.icon}
                </div>
                <h3 className="font-semibold text-[#fafafa] mb-2 group-hover:text-blue-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-[#71717a]">{resource.description}</p>
              </a>
            ))}
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
              <svg className="w-8 h-8" viewBox="0 0 300 276" fill="#ffffff">
                <g transform="translate(0,276) scale(0.1,-0.1)">
                  <path d="M2242 2653 c-11 -10 -143 -238 -295 -508 -249 -446 -829 -1480 -981 -1750 -77 -137 -86 -158 -86 -198 1 -51 49 -97 102 -97 55 0 81 32 167 201 46 90 166 322 266 514 100 193 303 584 450 870 147 286 313 606 368 710 59 112 100 202 100 219 0 50 -52 72 -91 39z" />
                  <path d="M634 2591 c-147 -24 -260 -120 -305 -260 -20 -60 -22 -92 -24 -356 -2 -169 -8 -304 -14 -324 -23 -75 -94 -141 -152 -141 -13 0 -34 -3 -46 -6 -23 -6 -23 -9 -23 -150 l0 -144 48 0 c72 0 130 -34 162 -95 24 -48 25 -57 31 -310 7 -277 14 -324 64 -410 45 -78 185 -185 242 -185 13 0 37 36 85 128 l67 127 -52 25 c-91 44 -93 49 -101 346 -9 310 -18 352 -96 437 -28 30 -69 64 -92 76 l-42 20 37 16 c78 32 138 108 172 215 14 45 18 107 22 335 4 218 8 285 19 302 27 42 71 56 192 61 l112 5 0 143 0 144 -53 0 c-30 0 -87 2 -128 4 -41 3 -97 1 -125 -3z" />
                  <path d="M2393 2401 c-35 -66 -63 -126 -63 -134 0 -9 9 -19 20 -22 11 -4 28 -18 38 -33 15 -23 18 -65 22 -347 5 -307 6 -322 28 -370 27 -59 61 -98 120 -135 l42 -28 -44 -26 c-24 -14 -56 -40 -70 -57 -71 -84 -85 -151 -95 -444 -9 -274 -12 -288 -81 -322 -37 -19 -60 -23 -142 -23 l-98 0 0 -146 0 -146 163 4 c152 3 166 5 220 30 115 54 180 128 219 251 17 52 22 103 28 312 5 144 13 267 20 290 16 53 76 112 120 119 19 3 52 8 73 11 l37 6 0 134 0 135 -28 0 c-16 0 -51 7 -79 15 -46 14 -62 26 -115 88 -1 1 -4 164 -7 362 -6 352 -7 361 -30 413 -14 31 -43 69 -70 93 -46 41 -129 89 -153 89 -7 0 -41 -54 -75 -119z" />
                </g>
              </svg>
              <span className="text-lg font-semibold tracking-tight">
                NAESTRO
              </span>
            </Link>
            <p className="text-[#71717a] text-sm leading-relaxed mb-6">
              META brain pre-ASI operating system. Control all AI technologies
              through a unified orchestration layer.
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
              {[
                { name: "Features", href: "#features" },
                { name: "Architecture", href: "#architecture" },
                { name: "Pricing", href: "#" },
                { name: "Roadmap", href: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: "Documentation", href: "#docs" },
                { name: "API Reference", href: "#" },
                { name: "MIND Language", href: "https://mindlang.dev" },
                { name: "GitHub", href: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:info@star.ga"
                  className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
                >
                  info@star.ga
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              Schedule a demo
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
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
            &copy; {new Date().getFullYear()} STARGA Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors"
            >
              Terms of Service
            </Link>
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
        <Architecture />
        <Technology />
        <Documentation />
      </main>
      <Footer />
    </div>
  );
}
