import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { anelyas } from "./fonts";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chathuweddingplanners.com"),

  title: {
  default:
    "Wedding Planner Sri Lanka | Chathu Wedding Planners",
  template: "%s | Chathu Wedding Planners",
},

description:
  "Chathu Wedding Planners offers professional wedding planning and wedding day coordination in Colombo and across Sri Lanka. Plan your dream wedding with confidence.",

  keywords: [
    "wedding planner Sri Lanka",
    "wedding planners Sri Lanka",
    "wedding planning Sri Lanka",
    "wedding coordinator Sri Lanka",
    "wedding day coordinator Sri Lanka",
    "wedding planner Colombo",
    "wedding planning Colombo",
    "Sri Lanka wedding planner",
    "Chathu Wedding Planners",
    "wedding day coordination",
    "full wedding planning",
    "partial wedding planning",
  ],

  authors: [{ name: "Chathu Wedding Planners" }],
  creator: "Chathu Wedding Planners",
  publisher: "Chathu Wedding Planners",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "/",
    siteName: "Chathu Wedding Planners",
    title: "Wedding Planner Sri Lanka | Chathu Wedding Planners",
    description:
      "Professional wedding planning and wedding day coordination in Sri Lanka. Creating beautiful, personalized and stress-free weddings.",
    images: [
      {
        url: "https://chathuweddingplanners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chathu Wedding Planners - Professional Wedding Planning in Sri Lanka",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wedding Planner Sri Lanka | Chathu Wedding Planners",
    description:
      "Professional wedding planning and wedding day coordination in Sri Lanka. Creating beautiful, personalized and stress-free weddings.",
    images: ["https://chathuweddingplanners.com/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
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
      <body
        suppressHydrationWarning
        className={`${anelyas.variable} ${inter.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
