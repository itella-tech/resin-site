"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/products";
import { useState, useEffect } from "react";
import { Footer } from "@/components/Footer";
import {
  type CarouselApi,
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

        {/* Lead Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              雨の日は、室内でまったり手作り沖縄アート体験
            </h2>
            <p className="text-lg text-center text-gray-600">
              外はしとしと雨でも、石垣島の室内であなただけの海を描いてみませんか？
              <br />
              雨音をBGMに、ゆったりとした時間の中でオリジナルのレジンアートを作り上げる、心温まるひとときをお約束します。
            </p>
          </div>
        </section>

        {/* Experience Highlights */}
        <section id="experience" className="py-16 relative">
          <div className="absolute inset-0 bg-[#91bdd6]" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, transparent 10%, rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.1) 15%, transparent 15%),
              radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 25%, transparent 25%),
              radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 25%, transparent 25%)
            `,
            backgroundSize: '100px 100px, 160px 160px, 160px 160px',
            backgroundPosition: '0 0, 0 0, 0 0'
          }} />
          <div className="container mx-auto px-4 relative">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">体験の魅力</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <Carousel 
                  className="w-full aspect-[4/3]" 
                  opts={{ loop: true, align: "start" }}
                  setApi={setApi}
                >
                  <CarouselContent>
                    {[
                      { src: "/ocean_board.webp", alt: "マングローブの写真1" },
                      { src: "/ocean_board_1.webp", alt: "マングローブの写真2" },
                      { src: "/couple_board.webp", alt: "マングローブの写真3" },
                      { src: "/couple_board2.webp", alt: "マングローブの写真4" },
                      { src: "/inside.webp", alt: "マングローブの写真5" },
                      { src: "/outside.webp", alt: "マングローブの写真6" },
                    ].map((image, index) => (
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
                  {[
                    "/ocean_board.webp",
                    "/ocean_board_1.webp",
                    "/couple_board.webp",
                    "/couple_board2.webp",
                    "/inside.webp",
                    "/outside.webp",
                  ].map((src, index) => (
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
              <div className="bg-white rounded-xl p-8 space-y-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">POINT.1</span>
                    <h3 className="text-2xl font-bold text-yellow-400">当日予約OK！</h3>
                  </div>
                  <p className="text-gray-700">
                    集合時間に間に合えばギリギリのご予約も大丈夫！是非一度お問合せください。
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">POINT.2</span>
                    <h3 className="text-2xl font-bold text-yellow-400">雨の日でもOK</h3>
                  </div>
                  <p className="text-gray-700">
                    室内アクティビティだから、雨でも大丈夫！急な雨でご旅行の予定が変更になっても楽しめる数少ないアクティビティです！
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">POINT.3</span>
                    <h3 className="text-2xl font-bold text-yellow-400">5歳のお子様から参加できる！</h3>
                  </div>
                  <p className="text-gray-700">
                    絵の具で海を描くパートはお子様でも大丈夫！ご友人同士、ご家族、三世代旅行、グループ、お一人様のご参加も大歓迎！
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">POINT.4</span>
                    <h3 className="text-2xl font-bold text-yellow-400">石垣旅行を全力でサポート</h3>
                  </div>
                  <p className="text-gray-700">
                    ご予約の際も専任の予約担当者が当店のメニューだけではなく、親身になってお客様の石垣旅行を全力でサポートいたします！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 体験プランセクション */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">体験プラン</h2>
            <p className="text-center text-gray-600 mb-12">
              お好みやご予算に合わせて、最適なプランをお選びいただけます。<br/>
              初めての方でも安心して楽しめる、丁寧なサポート付きです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* シンプルレジンアート */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-ocean-dark flex items-center justify-between">
                  <span>シンプルレジンアート</span>
                  <span className="text-lg font-normal text-gray-600">¥6,000</span>
                </h3>
                <div className="space-y-4">
                  <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/ocean_board.webp"
                      alt="シンプルレジンアートの例"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="bg-ocean-light/10 p-6 rounded-xl">
                      <h4 className="text-lg font-bold text-ocean-dark mb-3">特徴</h4>
                      <p className="text-gray-700 leading-relaxed">
                        砂浜や波、空などを自由に表現できる、オリジナリティあふれる作品作りが可能です。
                      </p>
                    </div>
                    <div className="bg-ocean-light/10 p-6 rounded-xl">
                      <h4 className="text-lg font-bold text-ocean-dark mb-3">こんな方におすすめ</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-ocean-dark rounded-full mr-2"></span>
                          絵を描くことが好きな方
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-ocean-dark rounded-full mr-2"></span>
                          自分だけの海を創造したい方
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-ocean-dark rounded-full mr-2"></span>
                          お子様との思い出作りに
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* フォトレジンアート */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-ocean-dark flex items-center justify-between">
                  <span>フォトレジンアート</span>
                  <span className="text-lg font-normal text-gray-600">¥10,000</span>
                </h3>
                <div className="space-y-4">
                  <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/photo_board_1.webp"
                      alt="フォトレジンアートの例"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="bg-ocean-light/10 p-6 rounded-xl">
                      <h4 className="text-lg font-bold text-ocean-dark mb-3">特徴</h4>
                      <p className="text-gray-700 leading-relaxed">
                        思い出の写真と美しい海のアートを組み合わせた、世界に一つだけのフォトフレームを作れます。
                      </p>
                    </div>
                    <div className="bg-ocean-light/10 p-6 rounded-xl">
                      <h4 className="text-lg font-bold text-ocean-dark mb-3">こんな方におすすめ</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-ocean-dark rounded-full mr-2"></span>
                          カップルや家族での思い出作りに
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-ocean-dark rounded-full mr-2"></span>
                          記念日のギフトとして
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-ocean-dark rounded-full mr-2"></span>
                          旅の思い出を特別な形に残したい方
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                    <AccordionTrigger>シンプルレジンアートとフォトレジンアートの違いは？</AccordionTrigger>
                    <AccordionContent>
                      シンプルレジンアートは、砂浜や波、空などを自由に描いて創作する作品です。一方、フォトレジンアートは、お気に入りの写真をレジンアートと組み合わせて、特別なフォトフレームを作成します。どちらも思い出に残る素敵な作品を作ることができます。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>所要時間はどのくらいですか？</AccordionTrigger>
                    <AccordionContent>
                      シンプルレジンアートは約1時間から1時間半程度です。フォトレジンアートは写真の選定や配置の時間が必要なため、約2時間程度かかります。デザインの複雑さによって多少前後する場合があります。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>予約は必要ですか？</AccordionTrigger>
                    <AccordionContent>
                      はい、スムーズな体験のために事前予約をお願いしています。当日の空き状況によっては当日予約も可能な場合がありますが、確実に体験されたい方は事前のご予約をおすすめします。特にフォトレジンアートは準備に時間がかかるため、前日までのご予約をお願いしています。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>子供でも参加できますか？</AccordionTrigger>
                    <AccordionContent>
                      はい、5歳以上のお子様から参加いただけます。シンプルレジンアートは特に、お子様でも楽しく取り組めるよう、スタッフが丁寧にサポートいたします。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>作品は当日持ち帰れますか？</AccordionTrigger>
                    <AccordionContent>
                      レジンの乾燥時間が必要なため、作品は翌日以降のお渡しとなります。ご宿泊先へのお届けや、ご自宅への配送も承っております（送料別途）。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>フォトレジンアートの写真はどうすればいいですか？</AccordionTrigger>
                    <AccordionContent>
                      スマートフォンの写真でもOKです。その場で撮影した写真も使用できます。また、事前にデータをお送りいただければ、こちらで印刷の準備をさせていただきます。
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
