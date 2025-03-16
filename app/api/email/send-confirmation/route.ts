import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ReservationFormData } from '@/types/reservation';
import ReservationConfirmationEmail from '@/server/components/emails/reservation-confirmation';
import { storeInfo } from '@/components/lp/StoreInfo/data';

// Cloudflare Pagesではエッジランタイムが必要
export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const reservation: ReservationFormData = await request.json();
    
    // 時間から秒数を削除
    if (reservation.time) {
      // "HH:MM:SS - HH:MM:SS" 形式の時間から秒数だけを削除
      const timePattern = /(\d{1,2}:\d{2}):\d{2}\s*-\s*(\d{1,2}:\d{2}):\d{2}/;
      const match = reservation.time.match(timePattern);
      
      if (match) {
        // 秒数を除いた時間に置き換え
        reservation.time = `${match[1]} - ${match[2]}`;
      }
    }
    
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing Resend API key');
      return NextResponse.json(
        { success: false, error: 'Missing Resend API key' },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      console.error('Missing sender email address');
      return NextResponse.json(
        { success: false, error: 'Missing sender email address' },
        { status: 500 }
      );
    }
    
    try {
      // Resendインスタンスを作成
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      try {
        // まずReact Emailコンポーネントを使用してみる
        console.log('React Emailコンポーネントを使用して送信を試みます');
        const data = await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL,
          to: reservation.email,
          bcc: ["d.hatoma@itella.tech", "pigeoneye810@gmail.com"],
          subject: `【れじこら工房】${reservation.planName}のご予約確認`,
          react: ReservationConfirmationEmail({ reservation }),
        });
        
        return NextResponse.json({ success: true, data });
      } catch (reactError) {
        // React Emailコンポーネントが失敗した場合、プレーンなHTMLを使用
        console.error('React Emailコンポーネントでのメール送信に失敗しました:', reactError);
        console.log('プレーンなHTMLテンプレートを使用して再試行します');
        
        // プレーンなHTMLテンプレートを作成
        const htmlContent = generateEmailHTML(reservation);
        
        const fallbackData = await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL,
          to: reservation.email,
          bcc: ["d.hatoma@itella.tech", "pigeoneye810@gmail.com"],
          subject: `【れじこら工房】${reservation.planName}のご予約確認`,
          html: htmlContent,
        });
        
        return NextResponse.json({ 
          success: true, 
          data: fallbackData,
          note: 'Sent using fallback HTML template'
        });
      }
    } catch (error) {
      console.error('Resend API error:', error);
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Unknown error';
      
      return NextResponse.json(
        { success: false, error: `Email sending failed: ${errorMessage}` },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

// プレーンなHTMLメールテンプレートを生成する関数
function generateEmailHTML(reservation: ReservationFormData): string {
  // Googleマップへのリンクを追加
  const mapLink = "https://maps.app.goo.gl/2uHLmFTtqWfTVQcg9";
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>ご予約確認メール</title>
  <style>
    body {
      font-family: sans-serif;
      background-color: #ffffff;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 580px;
      margin: 0 auto;
      padding: 20px 0 48px;
    }
    h1 {
      color: #333;
      font-size: 24px;
      font-weight: bold;
      margin: 40px 0;
      padding: 0;
      text-align: center;
    }
    h2 {
      color: #444;
      font-size: 20px;
      font-weight: bold;
      margin: 20px 0;
    }
    p {
      color: #333;
      font-size: 16px;
      line-height: 24px;
      margin: 16px 0;
    }
    .section {
      padding: 24px;
      border: 1px solid #eee;
      border-radius: 5px;
      margin: 28px 0;
    }
    hr {
      border-color: #cccccc;
      margin: 20px 0;
    }
    .footer {
      color: #666;
      font-size: 14px;
      line-height: 24px;
      margin: 48px 0 20px;
      text-align: center;
    }
    a {
      color: #007bff;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>ご予約確認メール</h1>
    <p>${reservation.name}様</p>
    <p>この度は、${reservation.planName}をご予約いただき、誠にありがとうございます。以下の内容でご予約を承りましたのでご確認ください。</p>
    
    <div class="section">
      <h2>予約内容</h2>
      <p>プラン: ${reservation.planName}</p>
      <p>予約日: ${reservation.date}</p>
      <p>時間: ${reservation.time}</p>
      <p>人数: ${reservation.number_of_people}名</p>
      ${reservation.notes ? `<p>メッセージ: ${reservation.notes}</p>` : ''}
    </div>
    
    <hr>
    
    <div class="section">
      <h2>アクセス</h2>
      <p>${storeInfo.address.postal}</p>
      <p>${storeInfo.address.full}</p>
      <p>${storeInfo.address.access}</p>
      <p>電話番号: ${storeInfo.tel}</p>
      <p>営業時間: ${storeInfo.hours}</p>
      <p><a href="${mapLink}">Googleマップで見る</a></p>
    </div>
    
    <p class="footer">※このメールは自動送信されています。ご不明な点がございましたら、お気軽にお問い合わせください。</p>
  </div>
</body>
</html>
  `;
}
