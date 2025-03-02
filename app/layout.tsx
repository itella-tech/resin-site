import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

export const runtime = "edge";

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
      </body>
    </html>
  );
}
