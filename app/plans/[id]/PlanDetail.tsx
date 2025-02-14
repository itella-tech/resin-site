import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { type Product } from "@/lib/products";
import { ReservationButtons } from "./ReservationButtons";

interface Props {
  product: Product;
}

export function PlanDetail({ product }: Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              ← 戻る
            </Link>
            <h1 className="text-2xl font-bold">
              <Link href="/" className="text-gray-900">
                れじこら工房
              </Link>
            </h1>
            <div className="w-16"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <h1 className="text-3xl font-bold mb-6">{product.title}</h1>

          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {product.images.map((image: string, index: number) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image}
                  alt={`${product.title} - ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Price Section */}
          <div className="bg-ocean-light/10 p-6 rounded-lg mb-8">
            <p className="text-3xl font-bold text-ocean-dark text-center">
              ¥{product.price.toLocaleString()}（税込）
            </p>
          </div>

          {/* Description */}
          <div className="prose max-w-none mb-12">
            <div className="whitespace-pre-line text-gray-700">
              {product.description}
            </div>
          </div>

          {/* Highlights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">ハイライト</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {product.highlights.map((highlight: string, index: number) => (
                <div
                  key={index}
                  className="bg-ocean-light/10 p-4 rounded-lg"
                >
                  <span className="inline-block bg-ocean text-white px-2 py-1 rounded-full text-sm mb-2">
                    POINT {index + 1}
                  </span>
                  <p className="text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Plan Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">プラン情報</h2>
            <div className="space-y-4">
              <div className="flex border-b border-gray-200 py-4">
                <div className="w-32 font-semibold">開催場所</div>
                <div className="flex-1">{product.planInfo.location}</div>
              </div>
              <div className="flex border-b border-gray-200 py-4">
                <div className="w-32 font-semibold">参加人数</div>
                <div className="flex-1">{product.planInfo.capacity}</div>
              </div>
              <div className="flex border-b border-gray-200 py-4">
                <div className="w-32 font-semibold">所要時間</div>
                <div className="flex-1">{product.planInfo.duration}</div>
              </div>
              <div className="flex border-b border-gray-200 py-4">
                <div className="w-32 font-semibold">その他情報</div>
                <div className="flex-1">
                  <ul className="list-disc list-inside space-y-2">
                    {product.planInfo.notes.map((note: string, index: number) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <ReservationButtons />
        </div>
      </main>

      <Footer />
    </div>
  );
}
