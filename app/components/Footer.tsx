import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600">
          <p>© 2024 れじこら工房. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/tokushoho" className="text-sm text-gray-500 hover:text-gray-700">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
