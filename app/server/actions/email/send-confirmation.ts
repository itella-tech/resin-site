'use server'

import { ReservationFormData } from '@/types/reservation';
import { Resend } from 'resend';
import ReservationConfirmationEmail from '../../components/emails/reservation-confirmation';

export async function sendConfirmationEmail(reservation: ReservationFormData) {
  try {
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
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    if (!process.env.RESEND_API_KEY) {
      throw new Error('Missing Resend API key');
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      throw new Error('Missing sender email address');
    }

    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: reservation.email,
      bcc: ["d.hatoma@itella.tech", "pigeoneye810@gmail.com"],
      subject: `【れじこら工房】${reservation.planName}のご予約確認`,
      react: ReservationConfirmationEmail({ reservation }),
    });

    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
}
