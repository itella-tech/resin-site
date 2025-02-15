"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { carouselImages, thumbnailImages } from "./data";

export function ImageCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="space-y-6">
      <div className="bg-white/95 rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-ocean-dark mb-3">こんな素敵な作品が作れます</h3>
      </div>
      <Carousel 
        className="w-full aspect-[4/3]" 
        opts={{ loop: true, align: "start" }}
        setApi={setApi}
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="grid grid-cols-6 gap-2">
        {thumbnailImages.map((src, index) => (
          <div key={index} className="relative aspect-square w-full overflow-hidden rounded-lg">
            <Image
              src={src}
              alt={`サムネイル ${index + 1}`}
              fill
              className="object-cover hover:opacity-80 transition-opacity cursor-pointer"
              sizes="(max-width: 768px) 16vw, 8vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
