// app/products/page.tsx
import Link from "next/link";
import { getProducts } from "@/lib/api";

export const metadata = { title: "Products" };

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const products = await getProducts(q);

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Products</h1>

      <form action="/products" className="mb-6 flex gap-2">
        <input name="q" defaultValue={q} placeholder="Search..." className="flex-1 rounded border p-2" />
        <button className="rounded bg-black px-4 text-white">Search</button>
      </form>

      {products.length === 0 && <p>No products found.</p>}

      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((p) => (
          <li key={p.id} className="rounded-lg border p-4 transition hover:-translate-y-1 hover:shadow-lg">
            <Link href={`/products/${p.id}`}>
              <img src={p.thumbnail} alt={p.title} className="mb-3 h-40 w-full object-contain" />
              <h2 className="font-semibold">{p.title}</h2>
              <p className="text-sm text-gray-600">${p.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}