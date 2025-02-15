"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { products } from "@/lib/products";

export function Booking() {
  return (
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
  );
}
