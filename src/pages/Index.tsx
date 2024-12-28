import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { Menu, Phone, Mail, Clock } from "lucide-react";

const products = [
  {
    id: 1,
    title: "シンプルコースター！【30分〜】旅を彩るレジンアート体験！",
    price: 2500,
    image: "/lovable-uploads/db847c28-590e-46ed-81b9-ab9e146c0d21.png",
    category: "石垣島の内江, 手作り体験, コースター, オリジナルボード, ハンドメイド, ものづくり体験, お土産体験",
  },
  {
    id: 2,
    title: "オリジナルコースター！【30分〜】デザインを選べる！子供にも大人気！",
    price: 3000,
    image: "/lovable-uploads/db847c28-590e-46ed-81b9-ab9e146c0d21.png",
    category: "石垣島の内江, 手作り体験, コースター, オリジナルボード, ハンドメイド",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          {/* Top Info Bar */}
          <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b border-gray-100">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>0980-XX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>info@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>営業時間 10:00-18:00</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-ocean">Instagram</a>
              <a href="#" className="hover:text-ocean">Facebook</a>
            </div>
          </div>
          
          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold">
                <a href="/" className="text-gray-900">
                  Ocean Resin Art
                </a>
              </h1>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#products" className="text-gray-600 hover:text-ocean">プラン・メニュー</a>
                <a href="#access" className="text-gray-600 hover:text-ocean">アクセス</a>
                <a href="#contact" className="text-gray-600 hover:text-ocean">お問い合わせ</a>
              </nav>
            </div>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-ocean to-ocean-light flex items-center justify-center text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/lovable-uploads/db847c28-590e-46ed-81b9-ab9e146c0d21.png"
            alt="Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative text-center space-y-4 animate-fade-up">
          <h1 className="text-5xl font-bold">Ocean-Inspired Resin Art</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover unique pieces that bring the beauty of the ocean into your home
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white">
        {/* Products Section */}
        <div id="products" className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">PLAN MENU</h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {products.map((product) => (
              <div key={product.id} className="animate-fade-up">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* Store Information */}
        <div className="border-t border-gray-100">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">店舗案内</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-6">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                  alt="Store Exterior"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1473177104440-ffee2f376098"
                  alt="Store Interior"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-6 flex flex-col justify-center">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">アクセス</h3>
                  <p className="text-gray-600">
                    〒907-0024<br />
                    沖縄県石垣市新川 XXX-XX<br />
                    石垣港離島ターミナルから徒歩10分
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">営業時間</h3>
                  <p className="text-gray-600">
                    10:00 - 18:00<br />
                    定休日：水曜日
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">お問い合わせ</h3>
                  <p className="text-gray-600">
                    TEL: 0980-XX-XXXX<br />
                    Email: info@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;