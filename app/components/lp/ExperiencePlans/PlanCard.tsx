"use client"

import Image from "next/image"

interface PlanCardProps {
  title: string
  price: string
  imageSrc: string
  imageAlt: string
  features: string
  recommendations: string[]
}

export function PlanCard({
  title,
  price,
  imageSrc,
  imageAlt,
  features,
  recommendations,
}: PlanCardProps) {
  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      const offset = bookingSection.offsetTop - 50; // ヘッダーの高さを考慮
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className="bg-white rounded-xl p-8 shadow-lg cursor-pointer transition-transform hover:scale-105"
      onClick={scrollToBooking}
    >
      <h3 className="text-2xl font-bold mb-6 text-ocean-dark flex items-center justify-between">
        <span>{title}</span>
        <span className="text-lg font-normal text-gray-600">{price}</span>
      </h3>
      <div className="space-y-4">
        <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <div className="bg-ocean-light/10 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-ocean-dark mb-3">特徴</h4>
            <p className="text-gray-700 leading-relaxed">
              {features}
            </p>
          </div>
          <div className="bg-ocean-light/10 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-ocean-dark mb-3">こんな方におすすめ</h4>
            <ul className="text-gray-700 space-y-2">
              {recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-ocean-dark rounded-full mr-2"></span>
                  {recommendation}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
