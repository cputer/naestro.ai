import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://naestro.ai";
const siteName = "NAESTRO";

export const metadata: Metadata = {
  // Basic SEO
  title: {
    default: "NAESTRO | META BRAIN Pre-ASI Operating System",
    template: "%s | NAESTRO",
  },
  description:
    "NAESTRO is the world's first META BRAIN operating system designed to orchestrate and control all existing and future AI technologies through MIND Language. Built by STARGA Inc.",
  keywords: [
    "NAESTRO",
    "META BRAIN",
    "pre-ASI",
    "AI orchestration",
    "MIND Language",
    "AI control",
    "agent kernel",
    "AI automation",
    "artificial intelligence",
    "AI operating system",
    "STARGA",
    "AI governance",
    "machine learning orchestration",
    "neural network control",
    "AI infrastructure",
  ],
  authors: [{ name: "STARGA Inc.", url: "https://star.ga" }],
  creator: "STARGA Inc.",
  publisher: "STARGA Inc.",

  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "NAESTRO | META BRAIN Pre-ASI Operating System",
    description:
      "Control all AI technologies through a unified orchestration layer powered by MIND Language. The future of AI governance starts here.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "NAESTRO - META BRAIN Pre-ASI Operating System",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "NAESTRO | META BRAIN Pre-ASI Operating System",
    description:
      "Control all AI technologies through a unified orchestration layer powered by MIND Language.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@naestro_ai",
  },

  // App specific
  applicationName: "NAESTRO",
  category: "Technology",

  // Verification (add your verification codes when available)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#080f11" },
    { media: "(prefers-color-scheme: dark)", color: "#080f11" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "NAESTRO",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Cross-platform",
              description:
                "META BRAIN Pre-ASI Operating System for AI orchestration and control",
              url: siteUrl,
              author: {
                "@type": "Organization",
                name: "STARGA Inc.",
                url: "https://star.ga",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "STARGA Inc.",
              url: "https://star.ga",
              logo: `${siteUrl}/icon.svg`,
              sameAs: [
                "https://twitter.com/naestro_ai",
                "https://github.com/cputer/naestro.ai",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@star.ga",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased bg-[#080f11] text-[#b8bbbc] font-sans">
        {children}
      </body>
    </html>
  );
}
