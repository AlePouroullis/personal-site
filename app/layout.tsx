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
  title: "ale@london:~$ whoami",
  description:
    "Product Engineer @ Humanloop | Building tools that help enterprises integrate AI into their applications. Based in London, originally from Cape Town.",
  keywords: [
    "Product Engineer",
    "Software Engineer",
    "AI",
    "LLM",
    "London",
    "Humanloop",
    "Cape Town",
  ],
  authors: [{ name: "Alé Pouroullis" }],
  creator: "Alé Pouroullis",
  openGraph: {
    title: "ale@london:~$ whoami",
    description:
      "Product Engineer @ Humanloop | Building AI tools in London | Running, handstands, and guitar in between commits",
    url: "https://alepouroullis.com",
    siteName: "ale@london",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ale@london:~$ whoami",
    description:
      "Product Engineer @ Humanloop | Building AI tools in London | Running, handstands, and guitar in between commits",
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
