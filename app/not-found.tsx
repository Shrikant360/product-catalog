// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <Link href="/products" className="underline">Back to products</Link>
    </div>
  );
}