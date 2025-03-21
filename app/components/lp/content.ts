export type LPContent = {
  hero: {
    title: string;
    description: string;
    mobileImage: string;
    desktopImage: string;
  };
  lead: {
    title: string;
    description: string;
  };
};

export const normalContent: LPContent = {
  hero: {
    title: "石垣島の\nレジンアート体験",
    description: "",
    mobileImage: "/ezgif-1e02702a16305e.webp",
    desktopImage: "/lp-hero2.webp",
  },
  lead: {
    title: "沖縄の海を閉じ込めた、あなただけの作品作り",
    description: "透明感のある美しい沖縄の海を\nお家に飾ってみませんか",
  },
};

export const rainyContent: LPContent = {
  hero: {
    title: "雨の日でも楽しめる\n思い出づくり。",
    description: "雨でも大丈夫。\n室内でゆったりと。",
    mobileImage: "/lp-hero.webp",
    desktopImage: "/lp-hero2.webp",
  },
  lead: {
    title: "雨の日は、室内でまったり手作り沖縄アート体験",
    description: "外はしとしと雨でも、室内であなただけの海を描いてみませんか？\n雨音をBGMに、ゆったりとした時間の中でオリジナルのレジンアートを作り上げる、心温まるひとときをお約束します。",
  },
};
