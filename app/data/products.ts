export const products = [
  {
    id: 1,
    title: "シンプルレジンアート！【1時間30分】海を彩るレジンアート体験！",
    price: 3000,
    images: [
      "/ocean_board.webp",
      "/ocean_board_1.webp"
    ],
    category: "石垣島雨の日, 手作り体験, コースター, オリジナルボード, ハンドメイド, ものづくり体験, 石垣島体験, レジンアート体験, カップル, 家族, 新婚旅行",
    description: `
      石垣島の美しい海をイメージしたレジンアートで、世界に一つだけのアートボードを作りましょう！

      ◆シンプルレジンアートプラン◆

      美しい海をイメージした作品作りを楽しみませんか？

      初めてレジンアートを触れる方でも、スタッフがしっかりサポートしますので安心してご参加いただけます！

      お子様から大人まで楽しめる内容です♪

      一緒に素敵な思い出を作りましょう♪

      ⭐️制作からお渡しまで⭐️

      1.制作のレクチャー
      2.デザイン相談
      3.制作開始
      4.仕上げ

      ⭐️こだわりポイント⭐️

      ・ワット（透明な樹脂）は高品質なものを使用しています。（オリジナル）安全で扱いやすさ抜群！透明度も抜群です！
      ・石垣島らしさを表現！海の青！
      ・オリジナルピグメントで美しい色彩表現が可能！

      《基本情報》
      ・制作時間：1時間30分
      ・料金：6,000円（税込）
      ・場所：石垣市平得 OK商店
    `,
    highlights: [
      "1時間30分でオリジナル作品が完成！",
      "お子様から大人まで楽しめる！",
      "オリジナルデザインで世界に一つだけの作品に！",
      "レジンアートで思い出を形に！",
      "石垣島らしい海をイメージした作品作り！",
      "スタッフがサポートするので安心！"
    ],
    planInfo: {
      location: "沖縄県石垣市平得346 OK商店",
      capacity: "1人〜4人",
      duration: "所要時間：1時間30分",
      notes: [
        "小学生以上の方が体験できます",
        "予約時間の10分前にお越しください",
      ]
    }
  },
  {
    id: 2,
    title: "フォトレジンアート！【1時間30分】思い出の写真をレジンアートに！",
    price: 6000,
    images: [
      "/photo_board_1.webp",
      "/photo_board_2.webp"
    ],
    category: "石垣島雨の日, 手作り体験, コースター, オリジナルボード, ハンドメイド, ものづくり体験, 石垣島体験, レジンアート体験, カップル, 家族, 新婚旅行",
    description: `
      大切な思い出の写真をレジンアートに閉じ込めて、特別な作品を作りましょう！

      ◆フォトレジンアートプラン◆

      旅の思い出やお気に入りの写真と一緒に、素敵なアート作品を作りませんか？

      お二人やご家族の写真を使って、世界に一つだけのオリジナル作品が作れます！
      カップルや友達同士、家族同士で特に人気のプランです♪

      一緒に素敵な思い出を作りましょう♪

      ⭐️制作からお渡しまで⭐️

      1.写真の選定・準備
      2.デザイン相談
      3.レイアウト決め
      4.制作開始
      5.仕上げ

      ⭐️作品のクオリティー⭐️

      思い出の写真と美しいレジンアートが融合した特別な作品に！

      ⭐️こだわりポイント⭐️

      ・オリジナルの配置で世界に一つだけの作品に
      ・美しい色彩と写真が調和した芸術的な仕上がり

      《基本情報》
      ・制作時間：1時間30分
      ・料金：10,000円（税込）
      ・場所：石垣市平得 OK商店
    `,
    highlights: [
      "思い出の写真をアート作品に！",
      "カップルや家族に大人気！",
      "世界に一つだけのオリジナル作品！",
      "写真とレジンアートの美しい調和！",
      "記念品として最適！",
      "スタッフがサポートするので安心！"
    ],
    planInfo: {
      location: "沖縄県石垣市平得346 OK商店",
      capacity: "1人〜4人",
      duration: "所要時間：1時間30分",
      notes: [
        "写真はご持参いただくか、スマートフォンの写真を使用可能です",
        "予約時間の10分前にお越しください",
      ]
    }
  }
] as const;

export type Product = (typeof products)[number];
