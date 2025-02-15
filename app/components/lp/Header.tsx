import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-4">
          <h1 className="text-2xl font-bold">
            <Link href="/" className="text-gray-900">
              れじこら工房
            </Link>
          </h1>
        </div>
      </div>
    </header>
  );
}
