import { Button } from "@/components/ui/button";
import Image from "next/image";

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
        </div>
        <div className="absolute bottom-8 left-8 w-32 h-32">
          <Image
            src="/sameDayBookingOK.webp"
            alt="当日予約OK"
            width={128}
            height={128}
            className="object-contain"
          />
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
        </div>
        <div className="absolute bottom-8 left-8 w-32 h-32">
          <Image
            src="/sameDayBookingOK.webp"
            alt="当日予約OK"
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}
