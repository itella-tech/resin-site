import { products } from "@/lib/products";
import { Metadata } from "next";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await Promise.resolve(params).then((params) => products.find((p) => String(p.id) === params.id));
  
  if (!product) {
    return {
      title: '商品が見つかりません | れじこら工房',
    };
  }

  return {
    title: `${product.title} | れじこら工房`,
    description: product.description.split('\n')[0],
  };
}
