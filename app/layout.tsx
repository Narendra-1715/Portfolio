import type { Metadata } from "next";
import { Caveat, Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://narendra-1715.github.io"),
  applicationName: "Narendra Babu — Portfolio",
  title: "Chappidi Venkata Narendra Babu — AI & Machine Learning Portfolio",
  description:
    "Chappidi Venkata Narendra Babu is an Engineering student specializing in Artificial Intelligence and Machine Learning at KKR & KSR Institute of Technology and Sciences, building real-time AI and software solutions.",
  keywords: ["Chappidi Venkata Narendra Babu", "Narendra Babu", "AI", "Machine Learning", "Python", "Deep Learning", "Giddalur", "Andhra Pradesh"],
  authors: [{ name: "Chappidi Venkata Narendra Babu" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chappidi Venkata Narendra Babu — AI & Machine Learning Portfolio",
    description:
      "Engineering student specializing in AI & Machine Learning at KKR & KSR Institute of Technology and Sciences.",
    type: "website",
    url: "https://narendra-1715.github.io",
    siteName: "Narendra Babu — Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Chappidi Venkata Narendra Babu — AI & Machine Learning Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chappidi Venkata Narendra Babu — AI & Machine Learning Portfolio",
    description:
      "Engineering student specializing in AI & Machine Learning at KKR & KSR Institute of Technology and Sciences.",
    images: ["/og.jpg"],
  },
};

// Structured data — only facts present on this website.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Chappidi Venkata Narendra Babu",
      url: "https://narendra-1715.github.io",
      sameAs: [
        "https://github.com/Narendra-1715",
        "https://www.linkedin.com/in/narendra-chappidi-986174418",
      ],
    },
    {
      "@type": "WebSite",
      name: "Chappidi Venkata Narendra Babu — AI & Machine Learning Portfolio",
      url: "https://narendra-1715.github.io",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${caveat.variable} h-full`}>
      <body className="min-h-full bg-[#05010f] text-[#f4f2ff] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
