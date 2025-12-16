import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naestro.ai | Intelligent Governance & Automation",
  description:
    "AI-driven platform for intelligent governance and automation. Optimize decision-making, business processes, and multi-wave PR systems powered by the MIND language.",
  keywords: [
    "AI governance",
    "automation",
    "MIND language",
    "decision-making",
    "business automation",
  ],
  authors: [{ name: "Naestro" }],
  openGraph: {
    title: "Naestro.ai | Intelligent Governance & Automation",
    description:
      "AI-driven platform for intelligent governance and automation.",
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
