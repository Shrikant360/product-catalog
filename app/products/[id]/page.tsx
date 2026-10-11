// app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import { getProduct } from "@/lib/api";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);
  return product
    ? { title: product.title, description: product.description }
    : { title: "Not found" };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) notFound();

  return (
    <article className="grid gap-8 md:grid-cols-2">
      <img src={product.thumbnail} alt={product.title} className="w-full rounded-lg border" />
      <div>
        <p className="text-sm uppercase text-gray-500">{product.category}</p>
        <h1 className="mb-2 text-3xl font-bold">{product.title}</h1>
        <p className="mb-4 text-xl">${product.price}</p>
        <p>{product.description}</p>
      </div>
    </article>
  );
}