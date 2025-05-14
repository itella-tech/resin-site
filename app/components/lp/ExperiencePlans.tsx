import { PlanCard } from "./ExperiencePlans/PlanCard";

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
          <PlanCard
            title="シンプルレジンアート"
            price="¥5,000"
            imageSrc="/ocean_board.webp"
            imageAlt="シンプルレジンアートの例"
            features="砂浜や波、空などを自由に表現できる、オリジナリティあふれる作品作りが可能です。"
            recommendations={[
              "絵を描くことが好きな方",
              "自分だけの海を創造したい方",
              "お子様との思い出作りに"
            ]}
          />
          <PlanCard
            title="フォトレジンアート"
            price="¥7,500"
            imageSrc="/photo_board_1.webp"
            imageAlt="フォトレジンアートの例"
            features="思い出の写真と美しい海のアートを組み合わせた、世界に一つだけのフォトフレームを作れます。"
            recommendations={[
              "カップルや家族での思い出作りに",
              "記念日のギフトとして",
              "旅の思い出を特別な形に残したい方"
            ]}
          />
        </div>
      </div>
    </section>
  );
}
