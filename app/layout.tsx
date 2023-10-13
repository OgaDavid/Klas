import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";
import Footer from "@/components/footer";
import Header from "@/components/header";

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
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// <!--Start of Tawk.to Script-->
// <script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/6528cc966fcfe87d54b95aa0/1hcjlubgk';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// </script>
// <!--End of Tawk.to Script-->