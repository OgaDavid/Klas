import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Free Online Teaching Platform | Klas.",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Klas",
    " Class",
    " Learning Platform",
    " Teaching tool",
    " E-learning",
    " Edtech",
    " Live Learning Technology",
    " Klas",
    " Class",
  ],
  authors: [
    {
      name: "Klas",
      url: "https://tryklas.vercel.app",
    },
  ],
  creator: "Klas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@klas_hq",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  );
}
