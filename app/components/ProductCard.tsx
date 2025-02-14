"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "../components/ui/skeleton";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: string;
  description: string;
}

export const ProductCard = ({ id, title, price, images, category, description }: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link href={`/plans/${id}`} className="block">
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="flex flex-col md:flex-row h-full">
          <CardContent className="p-0 relative md:w-1/3">
            <div className="aspect-square overflow-hidden relative">
              {!imageLoaded && (
                <Skeleton className="absolute inset-0" />
              )}
                <Image
                  src={images[0]}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                  onLoad={() => setImageLoaded(true)}
                  className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
            </div>
          </CardContent>
          <CardFooter className="flex-1 flex flex-col items-start gap-4 p-6">
            <div className="flex flex-wrap gap-2">
              {category.split(",").map((tag, index) => (
                <span
                  key={index}
                  className="bg-ocean-light/20 text-ocean-dark px-3 py-1 rounded-full text-sm"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
            <h3 className="font-semibold text-xl">{title}</h3>
            <p className="text-gray-600">
              {description}
            </p>
            <div className="flex justify-end items-center w-full mt-auto">
              <span className="text-2xl font-bold text-ocean-dark">¥{price.toLocaleString()}</span>
            </div>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
};
