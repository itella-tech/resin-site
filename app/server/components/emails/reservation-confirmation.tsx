import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { ReservationFormData } from "@/types/reservation";
import { storeInfo } from "@/components/lp/StoreInfo/data";

interface ReservationConfirmationEmailProps {
  reservation: ReservationFormData;
}

export function ReservationConfirmationEmail({
  reservation,
}: ReservationConfirmationEmailProps) {
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
  
  const previewText = `${reservation.planName}のご予約ありがとうございます`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>ご予約確認メール</Heading>
          <Text style={text}>
            {reservation.name}様
          </Text>
          <Text style={text}>
            この度は、{reservation.planName}をご予約いただき、誠にありがとうございます。
            以下の内容でご予約を承りましたのでご確認ください。
          </Text>

          <Section style={section}>
            <Heading as="h2" style={h2}>予約内容</Heading>
            <Text style={text}>
              プラン: {reservation.planName}
            </Text>
            <Text style={text}>
              予約日: {reservation.date}
            </Text>
            <Text style={text}>
              時間: {reservation.time}
            </Text>
            <Text style={text}>
              人数: {reservation.number_of_people}名
            </Text>
            <Text style={text}>
              電話番号: {reservation.phone_number}
            </Text>
            {reservation.notes && (
              <Text style={text}>
                メッセージ: {reservation.notes}
              </Text>
            )}
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={h2}>アクセス</Heading>
            <Text style={text}>
              {storeInfo.address.postal}
            </Text>
            <Text style={text}>
              {storeInfo.address.full}
            </Text>
            <Text style={text}>
              {storeInfo.address.access}
            </Text>
            <Text style={text}>
              電話番号: {storeInfo.tel}
            </Text>
            <Text style={text}>
              営業時間: {storeInfo.hours}
            </Text>
            <Text style={text}>
              <a href="https://maps.app.goo.gl/2uHLmFTtqWfTVQcg9" style={link}>
                Googleマップで見る
              </a>
            </Text>
          </Section>

          <Text style={footer}>
            ※このメールは自動送信されています。
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
  textAlign: "center" as const,
};

const h2 = {
  color: "#444",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "20px 0",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 0",
};

const section = {
  padding: "24px",
  border: "1px solid #eee",
  borderRadius: "5px",
  margin: "28px 0",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#666",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "48px 0 20px",
  textAlign: "center" as const,
};

const link = {
  color: "#007bff",
  textDecoration: "underline",
};

export default ReservationConfirmationEmail;
