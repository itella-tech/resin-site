import { products } from "@/lib/products";
import { Metadata } from "next";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => String(p.id) === id);

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
