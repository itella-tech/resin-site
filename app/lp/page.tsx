"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { products } from "@/lib/products";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ResinArtExperience() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-4">
            <h1 className="text-2xl font-bold">
              <Link href="/" className="text-gray-900">
                れじこら工房
              </Link>
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative h-[80vh] bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
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

        {/* Experience Highlights */}
        <section id="experience" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">体験の魅力</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">初心者でも安心</h3>
                  <p>丁寧な指導で、レジンアートの基礎から学べます。</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">カップル・家族で楽しめる</h3>
                  <p>大切な人と一緒に、素敵な思い出を作りましょう。</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">お土産にも最適</h3>
                  <p>自分だけのオリジナル作品を、素敵な思い出として持ち帰れます。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* プラン一覧セクション */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-8 text-center">体験プラン</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                images={[...product.images]}
                category={product.category}
                description={product.description.split("\n")[0]}
              />
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">作品ギャラリー</h2>
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {[1, 2, 3, 4, 5].map((index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=作品${index}`}
                      alt={`作品${index}`}
                      width={300}
                      height={300}
                      className="rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-2 z-10" />
              <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-2 z-10" />
            </Carousel>
          </div>
        </section>

        {/* Experience Details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">体験の流れ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">体験プロセス</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>受付、準備</li>
                  <li>デザイン決め</li>
                  <li>写真決め（フォトレジンアートの場合）</li>
                  <li>砂浜づくり</li>
                  <li>下絵塗り</li>
                  <li>レジンコーティング</li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">よくある質問</h3>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>所要時間はどのくらいですか？</AccordionTrigger>
                    <AccordionContent>
                      通常、体験時間は約1時間から1時間半程度です。デザインの複雑さによって多少前後する場合があります。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>予約は必要ですか？</AccordionTrigger>
                    <AccordionContent>
                      はい、スムーズな体験のために事前予約をお願いしています。当日の空き状況によっては当日予約も可能な場合がありますが、確実に体験されたい方は事前のご予約をおすすめします。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>子供でも参加できますか？</AccordionTrigger>
                    <AccordionContent>
                      はい、お子様も参加いただけます。
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">予約する</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <Input type="date" placeholder="希望日" className="bg-white text-black" />
                <Input type="number" placeholder="人数" min="1" className="bg-white text-black" />
                <select className="w-full p-2 rounded-md bg-white text-black border border-gray-300">
                  <option value="">コースを選択してください</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.title} (¥{product.price.toLocaleString()})
                    </option>
                  ))}
                </select>
                <Input type="text" placeholder="お名前" className="bg-white text-black" />
                <Input type="email" placeholder="メールアドレス" className="bg-white text-black" />
                <Input type="tel" placeholder="電話番号" className="bg-white text-black" />
                <Textarea placeholder="ご要望など" className="bg-white text-black" />
                <Button type="submit" className="w-full bg-white text-primary hover:bg-gray-100">
                  予約を確定する
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              お客様の声
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="mb-4">
                      「素晴らしい体験でした！スタッフの方々も親切で、思い出に残る作品が作れました。」
                    </p>
                    <div className="flex items-center">
                      <Image
                        src={`/placeholder.svg?height=50&width=50&text=顧客${index}`}
                        alt={`顧客${index}`}
                        width={50}
                        height={50}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <p className="font-semibold">山田 花子さん</p>
                        <p className="text-sm text-gray-500">東京から</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      {/* Store Information */}
      <div className="border-t border-gray-100">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">店舗案内</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-6">
                <div className="relative h-64">
                  <Image
                    src="/inside.webp"
                    alt="Store Interior"
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="relative h-64">
                  <Image
                    src="/outside.webp"
                    alt="Store Exterior"
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="space-y-6 flex flex-col justify-center">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">アクセス</h3>
                  <p className="text-gray-600">
                    〒907-0003<br />
                    沖縄県石垣市平得346 OK商店<br />
                    平得東バス停から徒歩3分
                  </p>
                  <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.242290674521!2d124.1774608!3d24.3380513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34600a98cd9743af%3A0x16931829c48aa27f!2z77yv77yr5ZWG5bqX!5e0!3m2!1sja!2sjp!4v1735368321873!5m2!1sja!2sjp"
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
                    10:00 - 18:00<br />
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">お問い合わせ</h3>
                  <p className="text-gray-600">
                    TEL: 0980-82-3522<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: string;
  description: string;
}

const ProductCard = ({
  id,
  title,
  price,
  images,
  category,
  description,
}: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link href={`/plans/${id}`} className="block">
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="flex flex-col md:flex-row h-full">
          <CardContent className="p-0 relative md:w-1/3">
            <div className="aspect-square overflow-hidden relative">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-100 animate-pulse"></div>
              )}
              <Image
                src={images[0]}
                alt={title}
                fill
                priority
                sizes={`(max-width: 768px) 100vw, 33vw`}
                onLoad={() => setImageLoaded(true)}
                className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </CardContent>
          <CardFooter className="flex-1 flex flex-col items-start gap-4 p-6">
            <div className="flex flex-wrap gap-2">
              {category.split(",").map((tag) => (
                <span
                  key={tag}
                  className="bg-ocean-light/20 text-ocean-dark px-3 py-1 rounded-full text-sm"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
            <h3 className="font-semibold text-xl">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <div className="flex justify-end items-center w-full mt-auto">
              <span className="text-2xl font-bold text-ocean-dark">
                ¥{price.toLocaleString()}
              </span>
            </div>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
};
