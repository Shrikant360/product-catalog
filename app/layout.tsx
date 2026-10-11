// app/layout.tsx
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: { default: "Product Catalog", template: "%s | Product Catalog" },
  description: "A Next.js learning project using a test API.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="flex gap-6 border-b p-4 font-medium">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </header>
        <main className="mx-auto max-w-5xl p-6">{children}</main>
        <footer className="border-t p-4 text-center text-sm">Built with Next.js</footer>
      </body>
    </html>
  );
}