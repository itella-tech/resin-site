import { useParams, Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const product = {
    id: 1,
    title: "シンプルコースター！【30分〜】旅を彩るレジンアート体験！",
    price: 2500,
    image: "/ocean_board.jpg",
    category: "石垣島の内江, 手作り体験, コースター, オリジナルボード, ハンドメイド",
    description: `
      石垣島での【思い出】を形にして持ち帰りませんか？コースタープラン！誰でも簡単に素敵な作品が制作できます！

      ◆コースタープラン◆

      おしゃれで可愛らしい思い出の品を作りませんか？

      初めてレジンアートを触れる方でも、スタッフがしっかりサポートしますので安心してご参加いただけます！

      お子様から大人まで楽しめる内容です♪

      レジンアート制作にて使用する一つ一つの材料は厳選されており、作品をより素敵に、特別なものにしております！
      一緒に素敵な思い出を作りましょう♪

      ⭐️制作からお渡しまで⭐️

      1.制作のレクチャー

      ⭐️作品のクオリティー⭐️

      お客様一人一人の個性が光る作品が完成します！

      ⭐️こだわりポイント⭐️

      ・ワット（透明な樹脂）は高品質なものを使用しています。（オリジナル）安全で扱いやすさ抜群！透明度も抜群です！
      ・石垣島らしさを表現！海の青！

      ⭐️制作のポイント⭐️

      オリジナルの作品が出来上がり♪世界で一つだけのコースターが完成します！

      ⭐️作品の特徴⭐️

      お客さまお一人お一人の個性が光る作品に仕上がります！世界で一つだけの作品をぜひ♪

      ⭐️製作・クリアリング・仕上げ工程⭐️

      お客様の想いが詰まった作品に、しっかりと丁寧に仕上げていきます♪心を込めて♪

      ⭐️レジンアートを制作する時の大切なPOINT⭐️

      必ずマスクをつけながら制作を♪（マスクは無料でお渡しいたします！）😊

      《基本情報（1名様分）》
      ・制作時間：30分〜1時間
      ・料金：2,500円（税込）
      ・場所：石垣島の内江
    `,
    highlights: [
      "制作時間30分からOKなので気軽に参加できる！",
      "お子様から大人まで楽しめる！",
      "オリジナルデザインで世界に一つだけの作品に！",
      "レジンアートで思い出を形に！",
      "石垣島らしい海をイメージした作品作り！",
      "スタッフがサポートするので安心！"
    ],
    planInfo: {
      location: "沖縄県・石垣島／石垣島・市街地",
      capacity: "1人〜",
      duration: "所要時間：30分〜1時間（制作時間）",
      notes: [
        "レジンアートは20歳以上の方が体験できます。",
        "マスク着用をお願いしております。",
      ]
    }
  };

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
                <div className="w-32 font-semibold">所要時間・集合</div>
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;