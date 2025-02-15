import Image from "next/image";

export function ExperiencePlans() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">体験プラン</h2>
        <p className="text-center text-gray-600 mb-12">
          お好みやご予算に合わせて、最適なプランをお選びいただけます。<br/>
          初めての方でも安心して楽しめる、丁寧なサポート付きです。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* シンプルレジンアート */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-ocean-dark flex items-center justify-between">
              <span>シンプルレジンアート</span>
              <span className="text-lg font-normal text-gray-600">¥6,000</span>
            </h3>
            <div className="space-y-4">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/ocean_board.webp"
                  alt="シンプルレジンアートの例"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="bg-ocean-light/10 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-ocean-dark mb-3">特徴</h4>
                  <p className="text-gray-700 leading-relaxed">
                    砂浜や波、空などを自由に表現できる、オリジナリティあふれる作品作りが可能です。
                  </p>
                </div>
                <div className="bg-ocean-light/10 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-ocean-dark mb-3">こんな方におすすめ</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-ocean-dark rounded-full mr-2"></span>
                      絵を描くことが好きな方
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-ocean-dark rounded-full mr-2"></span>
                      自分だけの海を創造したい方
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-ocean-dark rounded-full mr-2"></span>
                      お子様との思い出作りに
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* フォトレジンアート */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-ocean-dark flex items-center justify-between">
              <span>フォトレジンアート</span>
              <span className="text-lg font-normal text-gray-600">¥10,000</span>
            </h3>
            <div className="space-y-4">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/photo_board_1.webp"
                  alt="フォトレジンアートの例"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="bg-ocean-light/10 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-ocean-dark mb-3">特徴</h4>
                  <p className="text-gray-700 leading-relaxed">
                    思い出の写真と美しい海のアートを組み合わせた、世界に一つだけのフォトフレームを作れます。
                  </p>
                </div>
                <div className="bg-ocean-light/10 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-ocean-dark mb-3">こんな方におすすめ</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-ocean-dark rounded-full mr-2"></span>
                      カップルや家族での思い出作りに
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-ocean-dark rounded-full mr-2"></span>
                      記念日のギフトとして
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-ocean-dark rounded-full mr-2"></span>
                      旅の思い出を特別な形に残したい方
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
