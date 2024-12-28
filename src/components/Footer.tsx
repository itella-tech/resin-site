import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-ocean text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Ocean Resin Art</h3>
            <p className="text-gray-300">
              美しい海の世界をレジンアートで表現し、
              あなたの空間に特別な魅力を加えます。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">クイックリンク</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-ocean-light transition-colors">
                  ホーム
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ocean-light transition-colors">
                  商品一覧
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ocean-light transition-colors">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">お問い合わせ</h3>
            <p className="text-gray-300">メール: info@oceanresinart.com</p>
            <p className="text-gray-300">電話: 03-1234-5678</p>
            <div className="flex space-x-4 mt-4">
              <Button variant="ghost" size="icon" className="hover:text-ocean-light">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-ocean-light">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-ocean-light">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-600" />

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; 2024 Ocean Resin Art. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};