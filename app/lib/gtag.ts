// Google広告のコンバージョントラッキング用の型定義
declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
  }
}

/**
 * Google広告のコンバージョンを報告する関数（予約完了用）
 * @param url オプション: コンバージョン後にリダイレクトするURL
 * @returns false
 */
export function gtag_report_conversion(url?: string): boolean {
  const callback = function () {
    if (typeof(url) != 'undefined') {
      window.location.href = url;
    }
  };
  
  // ブラウザ環境でgtagが利用可能な場合のみ実行
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-16834960470/MfBxCL7Nn6caENa4xNs-',
      'value': 1.0,
      'currency': 'JPY',
      'event_callback': callback
    });
  }
  
  return false;
}

/**
 * Google広告のコンバージョンを報告する関数（電話予約用）
 * @param url オプション: コンバージョン後にリダイレクトするURL
 * @returns false
 */
export function gtag_report_phone_conversion(url?: string): boolean {
  const callback = function () {
    if (typeof(url) != 'undefined') {
      window.location.href = url;
    }
  };
  
  // ブラウザ環境でgtagが利用可能な場合のみ実行
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-16834960470/t1LuCKHRn6caENa4xNs-',
      'value': 1.0,
      'currency': 'JPY',
      'event_callback': callback
    });
  }
  
  return false;
}
