import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default async function PlansPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">体験プラン</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            images={[...product.images]}
            category={product.category}
            description={product.description.split('\n')[0]}
          />
        ))}
      </div>
    </div>
  );
}
