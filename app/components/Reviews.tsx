import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    text: "初めてのレジンアート体験でした！教えて下さった方は島の方で優しく丁寧に教えてくださり、みんなと話しながら楽しく作品作りに取り組めました。好きな写真を使って作品を作れたのも良かったです。あっという間の時間を過ごさせていただきました。作品が届くのを楽しみにしています！",
    date: "1ヶ月前",
    rating: 5
  },
  {
    text: "初めてのレジンアート体験でしたが、丁寧にゆっくり教えてもらえたおかげで、大きな失敗もなく、最後までスムーズに体験できました。私のイメージや要望を聞いて、アドバイスもくれたのでとても満足のいく作品ができました！駐車場があったのも、助かりました。作品が出来上がって、家に飾るのがとても楽しみです！素敵な体験をありがとうございました！",
    date: "3週間前",
    rating: 5
  },
  {
    text: "初めは不安でしたが、講師の方が優しく丁寧に教えてくださったので、とても楽しく作品を作ることができました。自分の好きな写真を使って世界に一つだけのオリジナル作品が作れるのが魅力的です。また参加したいと思います！",
    date: "2週間前",
    rating: 5
  }
]

export function Reviews() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-[#91bdd6]" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 10%, rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.1) 15%, transparent 15%),
          radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 25%, transparent 25%),
          radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 25%, transparent 25%)
        `,
        backgroundSize: '100px 100px, 160px 160px, 160px 160px',
        backgroundPosition: '0 0, 0 0, 0 0'
      }} />
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">お客様の声</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white/95">
              <CardContent className="p-6 relative">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.text}</p>
                <p className="text-sm text-gray-400">{review.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
