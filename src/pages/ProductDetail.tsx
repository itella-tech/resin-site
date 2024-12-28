import { useParams, Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const products = [
  {
    id: 1,
    title: "シンプルレジンアート！【1時間30分】海を彩るレジンアート体験！",
    price: 6000,
    image: "/ocean_board.jpg",
    category: "石垣島雨の日, 手作り体験, コースター, オリジナルボード, ハンドメイド, ものづくり体験, 石垣島体験, レジンアート体験, カップル, 家族, 新婚旅行",
    description: `
      石垣島の美しい海をイメージしたレジンアートで、世界に一つだけのアートボードを作りましょう！

      ◆シンプルレジンアートプラン◆

      美しい海をイメージした作品作りを楽しみませんか？

      初めてレジンアートを触れる方でも、スタッフがしっかりサポートしますので安心してご参加いただけます！

      お子様から大人まで楽しめる内容です♪

      一緒に素敵な思い出を作りましょう♪

      ⭐️制作からお渡しまで⭐️

      1.制作のレクチャー
      2.デザイン相談
      3.制作開始
      4.仕上げ

      ⭐️こだわりポイント⭐️

      ・ワット（透明な樹脂）は高品質なものを使用しています。（オリジナル）安全で扱いやすさ抜群！透明度も抜群です！
      ・石垣島らしさを表現！海の青！
      ・オリジナルピグメントで美しい色彩表現が可能！

      《基本情報》
      ・制作時間：1時間30分
      ・料金：6,000円（税込）
      ・場所：石垣市平得 OK商店
    `,
    highlights: [
      "1時間30分でオリジナル作品が完成！",
      "お子様から大人まで楽しめる！",
      "オリジナルデザインで世界に一つだけの作品に！",
      "レジンアートで思い出を形に！",
      "石垣島らしい海をイメージした作品作り！",
      "スタッフがサポートするので安心！"
    ],
    planInfo: {
      location: "沖縄県石垣市平得346 OK商店",
      capacity: "1人〜4人",
      duration: "所要時間：1時間30分",
      notes: [
        "小学生以上の方が体験できます",
        "予約時間の10分前にお越しください",
      ]
    }
  },
  {
    id: 2,
    title: "フォトレジンアート！【1時間30分】思い出の写真をレジンアートに！",
    price: 10000,
    image: "/couple_board.jpg",
    category: "石垣島雨の日, 手作り体験, コースター, オリジナルボード, ハンドメイド, ものづくり体験, 石垣島体験, レジンアート体験, カップル, 家族, 新婚旅行",
    description: `
      大切な思い出の写真をレジンアートに閉じ込めて、特別な作品を作りましょう！

      ◆フォトレジンアートプラン◆

      旅の思い出やお気に入りの写真と一緒に、素敵なアート作品を作りませんか？

      お二人やご家族の写真を使って、世界に一つだけのオリジナル作品が作れます！
      カップルや友達同士、家族同士で特に人気のプランです♪

      一緒に素敵な思い出を作りましょう♪

      ⭐️制作からお渡しまで⭐️

      1.写真の選定・準備
      2.デザイン相談
      3.レイアウト決め
      4.制作開始
      5.仕上げ

      ⭐️作品のクオリティー⭐️

      思い出の写真と美しいレジンアートが融合した特別な作品に！

      ⭐️こだわりポイント⭐️

      ・オリジナルの配置で世界に一つだけの作品に
      ・美しい色彩と写真が調和した芸術的な仕上がり

      《基本情報》
      ・制作時間：1時間30分
      ・料金：10,000円（税込）
      ・場所：石垣市平得 OK商店
    `,
    highlights: [
      "思い出の写真をアート作品に！",
      "カップルや家族に大人気！",
      "世界に一つだけのオリジナル作品！",
      "写真とレジンアートの美しい調和！",
      "記念品として最適！",
      "スタッフがサポートするので安心！"
    ],
    planInfo: {
      location: "沖縄県石垣市平得346 OK商店",
      capacity: "1人〜4人",
      duration: "所要時間：1時間30分",
      notes: [
        "写真はご持参いただくか、スマートフォンの写真を使用可能です",
        "予約時間の10分前にお越しください",
      ]
    }
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="container mx-auto px-4 py-8">商品が見つかりません</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              ← 戻る
            </Link>
            <h1 className="text-2xl font-bold">
              <Link to="/" className="text-gray-900">
                れじこら工房
              </Link>
            </h1>
            <div className="w-16"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <h1 className="text-3xl font-bold mb-6">{product.title}</h1>

          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Price Section */}
          <div className="bg-ocean-light/10 p-6 rounded-lg mb-8">
            <p className="text-3xl font-bold text-ocean-dark text-center">
              ¥{product.price.toLocaleString()}（税込）
            </p>
          </div>

          {/* Description */}
          <div className="prose max-w-none mb-12">
            <div className="whitespace-pre-line text-gray-700">
              {product.description}
            </div>
          </div>

          {/* Highlights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">ハイライト</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {product.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-ocean-light/10 p-4 rounded-lg"
                >
                  <span className="inline-block bg-ocean text-white px-2 py-1 rounded-full text-sm mb-2">
                    POINT {index + 1}
                  </span>
                  <p className="text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Plan Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">プラン情報</h2>
            <div className="space-y-4">
              <div className="flex border-b border-gray-200 py-4">
                <div className="w-32 font-semibold">開催場所</div>
                <div className="flex-1">{product.planInfo.location}</div>
              </div>
              <div className="flex border-b border-gray-200 py-4">
                <div className="w-32 font-semibold">参加人数</div>
                <div className="flex-1">{product.planInfo.capacity}</div>
              </div>
              <div className="flex border-b border-gray-200 py-4">
                <div className="w-32 font-semibold">所要時間</div>
                <div className="flex-1">{product.planInfo.duration}</div>
              </div>
              <div className="flex border-b border-gray-200 py-4">
                <div className="w-32 font-semibold">その他情報</div>
                <div className="flex-1">
                  <ul className="list-disc list-inside space-y-2">
                    {product.planInfo.notes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Reservation Button */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 md:relative md:border-0 md:p-0">
            <button className="w-full bg-ocean hover:bg-ocean-dark text-white font-bold py-4 px-6 rounded-lg transition duration-200">
              予約する
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;