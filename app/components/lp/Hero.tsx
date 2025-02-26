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
        className="relative h-[50vh] overflow-hidden md:hidden"
      >
        <div className="absolute inset-0">
          <Image
            src={content.mobileImage}
            alt="ヒーロー画像"
            fill
            sizes="100vw"
            priority
            placeholder="empty"
            className="object-cover"
            style={{ 
              objectPosition: 'center',
              transition: 'transform 0.5s ease-in-out, filter 0.5s ease-in-out',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 whitespace-pre-line">
            {content.title}
          </h1>
          <p className="text-xl mb-4 whitespace-pre-line">
            {content.description}
          </p>
          
          {/* 特徴バッジエリア（モバイル用） */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1 z-10">
            <div className="flex flex-col items-center">
              <svg width="140" height="140" viewBox="0 0 200 200" className="w-32 h-32">
                <circle cx="100" cy="100" r="90" fill="#e11d48" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="3" strokeDasharray="5,5" />
                <path d="M100,10 L110,30 L130,20 L130,40 L150,40 L140,60 L160,70 L140,80 L150,100 L130,100 L130,120 L110,110 L100,130 L90,110 L70,120 L70,100 L50,100 L60,80 L40,70 L60,60 L50,40 L70,40 L70,20 L90,30 Z" fill="#e11d48" />
                <text x="100" y="85" textAnchor="middle" fill="#fde047" fontWeight="bold" fontSize="42">当日</text>
                <text x="100" y="125" textAnchor="middle" fill="#fde047" fontWeight="bold" fontSize="42">予約OK</text>
              </svg>
            </div>
            
            <div className="flex flex-col items-center">
              <svg width="140" height="140" viewBox="0 0 200 200" className="w-32 h-32">
                <circle cx="100" cy="100" r="90" fill="#e11d48" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="3" strokeDasharray="5,5" />
                <path d="M100,10 L110,30 L130,20 L130,40 L150,40 L140,60 L160,70 L140,80 L150,100 L130,100 L130,120 L110,110 L100,130 L90,110 L70,120 L70,100 L50,100 L60,80 L40,70 L60,60 L50,40 L70,40 L70,20 L90,30 Z" fill="#e11d48" />
                <text x="100" y="85" textAnchor="middle" fill="#fde047" fontWeight="bold" fontSize="42">お子様</text>
                <text x="100" y="125" textAnchor="middle" fill="#fde047" fontWeight="bold" fontSize="42">OK</text>
              </svg>
            </div>
            
            <div className="flex flex-col items-center">
              <svg width="140" height="140" viewBox="0 0 200 200" className="w-32 h-32">
                <circle cx="100" cy="100" r="90" fill="#e11d48" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="3" strokeDasharray="5,5" />
                <path d="M100,10 L110,30 L130,20 L130,40 L150,40 L140,60 L160,70 L140,80 L150,100 L130,100 L130,120 L110,110 L100,130 L90,110 L70,120 L70,100 L50,100 L60,80 L40,70 L60,60 L50,40 L70,40 L70,20 L90,30 Z" fill="#e11d48" />
                <text x="100" y="85" textAnchor="middle" fill="#fde047" fontWeight="bold" fontSize="42">一組</text>
                <text x="100" y="125" textAnchor="middle" fill="#fde047" fontWeight="bold" fontSize="42">貸切</text>
              </svg>
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
            <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/photo_board_1.webp"
                alt="フォトレジンアートの例"
                fill
                className="object-contain"
                placeholder="empty"
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
              src="/phone_book.svg"
              alt="電話予約"
              width={300}
              height={60}
              className="w-full h-auto"
              placeholder="empty"
            />
          </Link>
          <div className="flex justify-center">
            <AvailabilityBadge />
          </div>
        </div>
      </div>

      {/* デスクトップ用ヒーロー */}
      <section
        className="relative h-[80vh] overflow-hidden hidden md:block"
      >
        <div className="absolute inset-0">
          <Image
            src={content.desktopImage}
            alt="ヒーロー画像"
            fill
            sizes="100vw"
            priority
            placeholder="empty"
            className="object-cover"
            style={{ 
              objectPosition: 'center',
              transition: 'transform 0.5s ease-in-out, filter 0.5s ease-in-out',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 whitespace-pre-line">
            {content.title}
          </h1>
          <p className="text-xl mb-8 whitespace-pre-line">
            {content.description}
          </p>
          
          {/* デスクトップ用ではバッジを表示しない */}
        </div>
      </section>
    </>
  );
}
