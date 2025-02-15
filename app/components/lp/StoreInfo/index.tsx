import Image from "next/image";
import { storeInfo } from "./data";

export function StoreInfo() {
  return (
    <div className="border-t border-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">店舗案内</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="relative h-64">
              <Image
                src={storeInfo.images.interior.src}
                alt={storeInfo.images.interior.alt}
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="relative h-64">
              <Image
                src={storeInfo.images.exterior.src}
                alt={storeInfo.images.exterior.alt}
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="space-y-6 flex flex-col justify-center">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">アクセス</h3>
              <p className="text-gray-600">
                {storeInfo.address.postal}<br />
                {storeInfo.address.full}<br />
                {storeInfo.address.access}
              </p>
              <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden shadow-md">
                <iframe
                  src={storeInfo.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="れじこら工房 Google マップ"
                ></iframe>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">営業時間</h3>
              <p className="text-gray-600">
                {storeInfo.hours}<br />
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">お問い合わせ</h3>
              <p className="text-gray-600">
                TEL: {storeInfo.tel}<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
