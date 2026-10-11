// lib/api.ts
export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
};

const BASE = "https://dummyjson.com";

export async function getProducts(q?: string): Promise<Product[]> {
  const url = q
    ? `${BASE}/products/search?q=${encodeURIComponent(q)}`
    : `${BASE}/products?limit=12`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error("Failed to load products");
  return (await res.json()).products;
}

export async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`${BASE}/products/${id}`, { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  return res.json();
}