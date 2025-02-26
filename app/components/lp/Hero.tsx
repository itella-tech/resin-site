"use client";

import Image from "next/image";
import { type LPContent } from "./content";
import { storeInfo } from "./StoreInfo/data";
import Link from "next/link";
import { AvailabilityBadge } from "./AvailabilityBadge";

type HeroProps = {
  content: LPContent["hero"];
};

export function Hero({ content }: HeroProps) {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      {/* モバイル用ヒーロー */}
      <section
        className="relative h-[50vh] bg-cover bg-center md:hidden"
        style={{
          backgroundImage: `url('${content.mobileImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 whitespace-pre-line">
            {content.title}
          </h1>
          <p className="text-xl mb-4 whitespace-pre-line">
            {content.description}
          </p>
          
          {/* 特徴バッジエリア（モバイル用） */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-4 z-10">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-1">
                <Image
                  src="/sameDayBookingOK.png"
                  alt="当日予約OK"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-white text-center mt-1 bg-black/50 px-2 py-1 rounded">当日予約OK</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-1">
                <Image
                  src="/child_ok.png"
                  alt="お子様OK"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-white text-center mt-1 bg-black/50 px-2 py-1 rounded">お子様OK</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-1">
                <Image
                  src="/private.png"
                  alt="一組貸切"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-white text-center mt-1 bg-black/50 px-2 py-1 rounded">一組貸切</span>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめプランカード（モバイル用） */}
      <div className="md:hidden relative px-4 py-3">
        <div className="bg-white rounded-xl shadow-lg p-4 relative">
          <div className="absolute -top-3 left-4 bg-primary text-white px-3 py-1 text-sm font-bold rounded-full">
            当店のおすすめ
          </div>
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={scrollToBooking}
          >
            <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/photo_board_1.webp"
                alt="フォトレジンアートの例"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold">フォトレジンアート</h3>
                <span className="text-sm font-medium text-gray-600">¥5,000</span>
              </div>
              <p className="text-xs text-gray-600 line-clamp-3">
                思い出の写真と美しい海のアートを組み合わせた、世界に一つだけのフォトフレームを作れます。
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 電話予約ボタンと空き状況（モバイル用） */}
      <div className="md:hidden px-4 py-2">
        <div className="flex flex-col gap-2">
          <Link href={`tel:${storeInfo.tel}`} className="block w-full">
            <Image
              src="/phone_book.png"
              alt="電話予約"
              width={300}
              height={60}
              className="w-full h-auto"
            />
          </Link>
          <div className="flex justify-center">
            <AvailabilityBadge />
          </div>
        </div>
      </div>

      {/* デスクトップ用ヒーロー */}
      <section
        className="relative h-[80vh] bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: `url('${content.desktopImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 whitespace-pre-line">
            {content.title}
          </h1>
          <p className="text-xl mb-8 whitespace-pre-line">
            {content.description}
          </p>
          
          {/* デスクトップ用特徴バッジエリア */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-12">
            {/* 特徴バッジ */}
            <div className="flex flex-col items-center">
              <div className="bg-white/90 rounded-full p-2">
                <Image
                  src="/sameDayBookingOK.png"
                  alt="当日予約OK"
                  width={140}
                  height={140}
                  className="object-contain hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-sm font-bold text-white text-center mt-2 bg-black/70 px-3 py-1 rounded-full">当日予約OK</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/90 rounded-full p-2">
                <Image
                  src="/child_ok.png"
                  alt="お子様OK"
                  width={140}
                  height={140}
                  className="object-contain hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-sm font-bold text-white text-center mt-2 bg-black/70 px-3 py-1 rounded-full">お子様OK</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/90 rounded-full p-2">
                <Image
                  src="/private.png"
                  alt="一組貸切"
                  width={140}
                  height={140}
                  className="object-contain hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-sm font-bold text-white text-center mt-2 bg-black/70 px-3 py-1 rounded-full">一組貸切</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
