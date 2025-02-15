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

interface ReservationConfirmationEmailProps {
  reservation: ReservationFormData;
}

export function ReservationConfirmationEmail({
  reservation,
}: ReservationConfirmationEmailProps) {
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
            {reservation.notes && (
              <Text style={text}>
                メッセージ: {reservation.notes}
              </Text>
            )}
          </Section>

          <Hr style={hr} />

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

export default ReservationConfirmationEmail;
