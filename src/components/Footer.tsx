import { Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-ocean text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">れじこら工房</h3>
            <p className="text-gray-300">
              美しい海の世界をレジンアートで表現し、
              あなたの空間に特別な魅力を加えます。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">SNS</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="https://www.instagram.com/resi_cola/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <Instagram className="h-5 w-5" />
                @resi_cola
              </a>
              <a
                href="https://www.tiktok.com/@oji_resin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                @oji_resin
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">お問い合わせ</h3>
            <p className="text-gray-300">電話: 0980-82-3522</p>
            <p className="text-gray-300">
              〒907-0003<br />
              沖縄県石垣市平得346 OK商店
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-gray-600" />

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; 2024 れじこら工房. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};