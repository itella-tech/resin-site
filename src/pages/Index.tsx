import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";

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
    <div className="min-h-screen bg-sand-light flex flex-col">
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
          {/* Vertical Menu */}
          <div className="flex flex-col space-y-4 mt-8">
            <a
              href="#products"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg transition-colors duration-300"
            >
              商品一覧
            </a>
            <a
              href="#contact"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg transition-colors duration-300"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="products" className="container mx-auto py-16 px-4 flex-grow">
        <h2 className="text-3xl font-bold text-center mb-12">PLAN MENU</h2>
        <div className="space-y-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="animate-fade-up">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
