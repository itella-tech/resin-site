import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "れじこら工房",
  description: "石垣島で海の思い出を形に - 美しい海をイメージしたレジンアート体験",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo_favicon.png", type: "image/png" }
    ],
    apple: [
      { url: "/logo_favicon.png", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
        <GoogleTagManager gtmId="GTM-M9KSPR38" />
        
        {/* Google Ads gtag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16834960470"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16834960470');
          `}
        </Script>
      </body>
    </html>
  );
}
