import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import { PlanDetail } from "./PlanDetail";

type Props = {
  params: { id: string };
};

export default async function PlanDetailPage({ params }: Props) {
  const product = await Promise.resolve(params).then((params) => products.find((p) => String(p.id) === params.id));

  if (!product) {
    return notFound();
  }

  return <PlanDetail product={product} />;
}

export { generateMetadata, generateStaticParams } from "./metadata";
