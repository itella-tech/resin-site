"use client";

import Image from "next/image";
import { type LPContent } from "./content";

type HeroProps = {
  content: LPContent["hero"];
};

export function Hero({ content }: HeroProps) {
  return (
    <>
      {/* モバイル用ヒーロー */}
      <section
        className="relative h-[60vh] bg-cover bg-center md:hidden"
        style={{
          backgroundImage: `url('${content.mobileImage}')`,
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
        </div>
        <div 
          className="absolute bottom-8 left-8 w-32 h-32 cursor-pointer"
          onClick={() => {
            document.getElementById('booking')?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
        >
          <Image
            src="/sameDayBookingOK.webp"
            alt="当日予約OK"
            width={128}
            height={128}
            className="object-contain hover:scale-105 transition-transform"
          />
        </div>
      </section>

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
        </div>
        <div 
          className="absolute bottom-8 left-8 w-32 h-32 cursor-pointer"
          onClick={() => {
            document.getElementById('booking')?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
        >
          <Image
            src="/sameDayBookingOK.webp"
            alt="当日予約OK"
            width={128}
            height={128}
            className="object-contain hover:scale-105 transition-transform"
          />
        </div>
      </section>
    </>
  );
}
