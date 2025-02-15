import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const scheduleSteps = [
  {
    step: "STEP.1",
    title: "受付、準備",
    description: "店舗にて受付を済ませ、エプロンの着用など制作の準備をします。（10：00、13：00、15：00に開始）",
    image: "/tour-schedule/step1.webp",
  },
  {
    step: "STEP.2",
    title: "デザイン決め",
    description: "作りたい作品のデザインを決めます。フォトレジンアートの場合は、使用する写真も選びます（スマホから印刷可能です）。スタッフが丁寧にアドバイスいたします。",
    image: "/tour-schedule/step2.webp",
  },
  {
    step: "STEP.3",
    title: "砂浜づくり",
    description: "本物の砂を使って、リアルな砂浜の質感を作り上げていきます。",
    image: "/tour-schedule/step3.webp",
  },
  {
    step: "STEP.4",
    title: "下絵塗り",
    description: "絵の具で海や空を描き、オリジナルの風景を作り上げていきます。",
    image: "/tour-schedule/step4.webp",
  },
  {
    step: "STEP.5",
    title: "レジンコーティング",
    description: "最後にレジンを流し込んで、透明感のある美しい仕上がりに。乾燥時間が必要なため、作品は後日のお渡しとなります。",
    image: "/tour-schedule/step5.webp",
  },
]

export function TourSchedule() {
  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">体験スケジュール</h2>
        <div className="grid gap-8 relative">
          {scheduleSteps.map((step, index) => (
            <Card key={step.step} className="relative">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/3 relative aspect-[4/3]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full mb-2">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </CardContent>
              {index < scheduleSteps.length - 1 && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  ↓
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
