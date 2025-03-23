import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | れじこら工房",
  description: "れじこら工房の特定商取引法に基づく表記です。",
};

export default function TokushohoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">特定商取引法に基づく表記</h1>
          
          <div className="space-y-8">
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">法人名</h2>
              <p className="text-gray-700">合同会社itella</p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">所在地</h2>
              <p className="text-gray-700">〒907-0003<br />沖縄県石垣市平得346</p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">電話番号</h2>
              <p className="text-gray-700">080-6496-1764</p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">メールアドレス</h2>
              <p className="text-gray-700">info@itella.tech</p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">代表者</h2>
              <p className="text-gray-700">代表社員 鳩間大也</p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">体験教室料金</h2>
              <p className="text-gray-700">各体験教室の詳細ページに記載の料金をご確認ください。</p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">支払方法</h2>
              <p className="text-gray-700">クレジットカード決済（体験終了後、即時決済によりお支払いいただきます）</p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">代金のお支払い時期</h2>
              <p className="text-gray-700">体験教室終了後、即時決済が行われます。</p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">体験教室の実施時期</h2>
              <p className="text-gray-700">ご予約いただいた日時に実施いたします。</p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">体験教室の実施方法</h2>
              <p className="text-gray-700">体験教室は、対面のみで実施いたします。詳細は各体験教室のご案内をご確認ください。</p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">返品・返金について</h2>
              <p className="text-gray-700">体験教室の性質上、体験終了後のお支払いにつきましては、原則として返金・キャンセルは承っておりません。万が一、やむを得ない事由がある場合は、個別に対応させていただきますので、お問い合わせください。</p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">参加人数</h2>
              <p className="text-gray-700">原則として定員の制限は設けておりませんが、定員に達した場合は受付を終了させていただくことがございます。</p>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">受講環境</h2>
              <p className="text-gray-700">体験教室の実施に必要な環境（対面の場合、会場の設備等についての詳細は各体験教室のページに記載）をご確認ください。</p>
            </div>
            
            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-2">サービス内容の瑕疵に関する弊社の責任</h2>
              <p className="text-gray-700">弊社は、体験教室の内容に万が一不備が発見された場合、速やかに改善に努めます。ただし、サービスの性質上、すべてのご要望に完全に対応できることを保証するものではございません。</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p>© 2024 れじこら工房. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
