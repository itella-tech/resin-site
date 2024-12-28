import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";

const products = [
  {
    id: 1,
    title: "シンプルコースター！【30分〜】旅を彩るレジンアート体験！",
    price: 2500,
    image: "/ocean_board.jpg",
    category: "石垣島の内江, 手作り体験, コースター, オリジナルボード, ハンドメイド, ものづくり体験, お土産体験",
  },
  {
    id: 2,
    title: "オリジナルコースター！【30分〜】デザインを選べる！子供にも大人気！",
    price: 3000,
    image: "/couple_board.jpg",
    category: "石垣島の内江, 手作り体験, コースター, オリジナルボード, ハンドメイド",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-4">
            <h1 className="text-2xl font-bold">
              <a href="/" className="text-gray-900">
                れじこら工房
              </a>
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-ocean to-ocean-light flex items-center justify-center text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/hero-image.png"
            alt="Hero"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="relative text-center space-y-8 animate-fade-up">
          <div className="flex justify-center mb-6">
            <img
              src="/logo.png"
              alt="れじこら工房"
              className="w-64 h-auto"
            />
          </div>
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">
            石垣島で海の思い出を形に
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-white drop-shadow-md">
            美しい海をイメージしたレジンアート体験
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
                    〒907-0003<br />
                    沖縄県石垣市平得346 OK商店<br />
                    平得東バス停から徒歩3分
                  </p>
                  <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.242290674521!2d124.1774608!3d24.3380513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34600a98cd9743af%3A0x16931829c48aa27f!2z77yv77yr5ZWG5bqX!5e0!3m2!1sja!2sjp!4v1735368321873!5m2!1sja!2sjp"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">営業時間</h3>
                  <p className="text-gray-600">
                    10:00 - 18:00<br />
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">お問い合わせ</h3>
                  <p className="text-gray-600">
                    TEL: 0980-82-3522<br />
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
