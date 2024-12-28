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
            <h3 className="text-xl font-semibold">れじこら工房</h3>
            <p className="text-gray-300">
              美しい海の世界をレジンアートで表現し、
              あなたの空間に特別な魅力を加えます。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">お問い合わせ</h3>
            <p className="text-gray-300">電話: 0980-82-3522</p>
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
          <p>&copy; 2024 れじこら工房. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};