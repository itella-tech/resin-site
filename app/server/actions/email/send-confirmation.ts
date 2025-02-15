'use server'

import { Resend } from 'resend';
import { ReservationFormData } from '@/types/reservation';
import ReservationConfirmationEmail from '../../components/emails/reservation-confirmation';

export async function sendConfirmationEmail(reservation: ReservationFormData) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  if (!process.env.RESEND_API_KEY) {
    throw new Error('Missing Resend API key');
  }

  if (!process.env.RESEND_FROM_EMAIL) {
    throw new Error('Missing sender email address');
  }

  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: reservation.email,
      subject: `【れじこら工房】${reservation.planName}のご予約確認`,
      react: ReservationConfirmationEmail({ reservation }),
    });

    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
}
