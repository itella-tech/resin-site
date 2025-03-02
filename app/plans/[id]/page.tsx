import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import { PlanDetail } from "./PlanDetail";

export const runtime = "edge";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PlanDetailPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return notFound();
  }

  return <PlanDetail product={product} />;
}

export { generateMetadata } from "./metadata";
