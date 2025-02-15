import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <>
      {/* モバイル用ヒーロー */}
      <section
        className="relative h-[80vh] bg-cover bg-center md:hidden"
        style={{
          backgroundImage: `url('/lp-hero.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            雨の日でも楽しめる
            <br />
            石垣島の思い出づくり。
          </h1>
          <p className="text-xl mb-8">
            雨でも大丈夫。
            <br />
            室内でゆったりと楽しめる「レジンアート体験」があります。
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              今すぐ予約
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-gray-100"
            >
              詳細を見る
            </Button>
          </div>
        </div>
      </section>

      {/* デスクトップ用ヒーロー */}
      <section
        className="relative h-[80vh] bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: `url('/lp-hero2.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            雨の日でも楽しめる
            <br />
            石垣島の思い出づくり。
          </h1>
          <p className="text-xl mb-8">
            雨でも大丈夫。
            <br />
            室内でゆったりと楽しめる「レジンアート体験」があります。
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              今すぐ予約
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-gray-100"
            >
              詳細を見る
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
