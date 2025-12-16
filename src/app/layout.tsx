import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naestro | META Brain Pre-ASI Operating System",
  description:
    "Naestro is the world's first META brain operating system designed to orchestrate and control all existing and future AI technologies through MIND Language.",
  keywords: [
    "META brain",
    "pre-ASI",
    "AI orchestration",
    "MIND language",
    "AI control",
    "agent kernel",
    "AI automation",
  ],
  authors: [{ name: "Naestro" }],
  openGraph: {
    title: "Naestro | META Brain Pre-ASI Operating System",
    description:
      "Control all AI technologies through a unified orchestration layer powered by MIND Language.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0a0a0f] text-[#fafafa] font-sans">
        {children}
      </body>
    </html>
  );
}
