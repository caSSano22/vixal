import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#040404",
};

export const metadata: Metadata = {
  title: "VIXAL — AI Intelligence Layer for Real World Assets on Robinhood Chain",
  description:
    "VIXAL is the Bloomberg Terminal of tokenized finance. AI-powered intelligence for real-world assets, built natively on Robinhood Chain. Analyze, predict, and act on RWA data in real-time.",
  keywords: ["VIXAL", "RWA", "real world assets", "Robinhood Chain", "DeFi", "AI analytics", "tokenized assets"],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.svg",
  },
  openGraph: {
    title: "VIXAL — AI Intelligence Layer for Real World Assets",
    description: "The Bloomberg Terminal of tokenized finance. Built on Robinhood Chain.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIXAL — AI Intelligence Layer for Real World Assets",
    description: "The Bloomberg Terminal of tokenized finance. Built on Robinhood Chain.",
  },
  robots: { index: true, follow: true },
  other: {
    "virtual-protocol-site-verification": "8e1147b3110dd0cf9cd1ae86e34362fd",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="virtual-protocol-site-verification" content="8e1147b3110dd0cf9cd1ae86e34362fd" />
      </head>
      <body className={`${inter.variable} font-sans bg-bg-primary text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
