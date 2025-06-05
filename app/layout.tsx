import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const font = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alé Pouroullis - Product Engineer",
  description:
    "Product Engineer at Humanloop building LLM evaluation tools. Previously architected systems scaling to $1.2M ARR with expertise in full-stack development and systems programming.",
  keywords: [
    "Product Engineer",
    "Software Engineer",
    "Full Stack",
    "London",
    "Humanloop",
  ],
  authors: [{ name: "Alé Pouroullis" }],
  creator: "Alé Pouroullis",
  openGraph: {
    title: "Alé Pouroullis - Product Engineer",
    description:
      "Product Engineer at Humanloop building LLM evaluation tools in London.",
    url: "https://alepouroullis.com",
    siteName: "Alé Pouroullis",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Alé Pouroullis - Product Engineer",
    description:
      "Product Engineer at Humanloop building LLM evaluation tools in London.",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#18181b" />
      </head>
      <body
        className={`${font.variable} ${mono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
