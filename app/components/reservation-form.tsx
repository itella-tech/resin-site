"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DailyTimeSlot, MenuItem, ReservationFormData } from "@/types/reservation"
import { createClientSupabaseClient } from "@/lib/supabase"
import { useToast } from "@/hooks/use-toast"
// import { sendConfirmationEmail } from "@/server/actions/email/send-confirmation"

const formSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  phone_number: z.string().min(1, "電話番号を入力してください"),
  number_of_people: z.coerce.number().min(1, "人数を入力してください"),
  notes: z.string().optional(),
})

interface ReservationFormProps {
  slot: DailyTimeSlot
  menu: MenuItem
  onSuccess: (formData: ReservationFormData) => void
  onCancel: () => void
}

export function ReservationForm({ slot, menu, onSuccess, onCancel }: ReservationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const supabase = createClientSupabaseClient()

  const form = useForm<ReservationFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      number_of_people: 1,
      notes: "",
    },
  })

  const onSubmit = async (data: ReservationFormData) => {
    try {
      setIsSubmitting(true)

      // 顧客情報を保存
      const { data: customer, error: customerError } = await supabase
        .from("customers")
        .insert({
          name: data.name,
          email: data.email,
          phone_number: data.phone_number,
        })
        .select()
        .single()

      if (customerError) {
        toast({
          title: "エラーが発生しました",
          description: "顧客情報の保存に失敗しました",
          variant: "destructive",
        })
        return
      }

      // 予約データを保存
      const { error: reservationError } = await supabase.from("reservations").insert({
        slot_id: slot.slot_id,
        menu_id: menu.menu_id,
        customer_id: customer.customer_id,
        reservation_date: slot.date,
        number_of_people: data.number_of_people,
      })

      if (reservationError) {
        toast({
          title: "エラーが発生しました",
          description: "予約の保存に失敗しました",
          variant: "destructive",
        })
        return
      }

      // 予約確認メールを送信
      const emailData = {
        ...data,
        planName: menu.name,
        date: slot.date,
        time: `${slot.start_time} - ${slot.end_time}`,
        menu_id: menu.menu_id
      }
      
      try {
        const response = await fetch('/api/email/send-confirmation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });
        
        const result = await response.json();
        
        if (!result.success) {
          toast({
            title: "メール送信に失敗しました",
            description: "予約は完了していますが、確認メールの送信に失敗しました",
            variant: "destructive",
          });
        } else {
          toast({
            title: "予約が完了しました",
            description: "ご予約の確認メールをお送りしました",
          });
        }
      } catch (error) {
        console.error('メール送信エラー:', error);
        toast({
          title: "メール送信に失敗しました",
          description: "予約は完了していますが、確認メールの送信に失敗しました",
          variant: "destructive",
        });
      }

      onSuccess(emailData)
    } catch {
      toast({
        title: "エラーが発生しました",
        description: "予約の保存に失敗しました",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            お名前 <span className="text-destructive">*</span>
          </label>
          <Input
            id="name"
            {...form.register("name")}
            placeholder="山田 太郎"
          />
          {form.formState.errors.name && (
            <p className="text-sm text-destructive mt-1">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            メールアドレス <span className="text-destructive">*</span>
          </label>
          <Input
            id="email"
            type="email"
            {...form.register("email")}
            placeholder="example@example.com"
          />
          {form.formState.errors.email && (
            <p className="text-sm text-destructive mt-1">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone_number" className="block text-sm font-medium mb-1">
            電話番号 <span className="text-destructive">*</span>
          </label>
          <Input
            id="phone_number"
            {...form.register("phone_number")}
            placeholder="090-1234-5678"
          />
          {form.formState.errors.phone_number && (
            <p className="text-sm text-destructive mt-1">
              {form.formState.errors.phone_number.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="number_of_people" className="block text-sm font-medium mb-1">
            人数 <span className="text-destructive">*</span>
          </label>
          <Input
            id="number_of_people"
            type="number"
            min={1}
            max={slot.available_capacity}
            {...form.register("number_of_people")}
          />
          {form.formState.errors.number_of_people && (
            <p className="text-sm text-destructive mt-1">
              {form.formState.errors.number_of_people.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium mb-1">
            備考
          </label>
          <Textarea
            id="notes"
            {...form.register("notes")}
            placeholder="ご要望等ございましたらご記入ください"
          />
          {form.formState.errors.notes && (
            <p className="text-sm text-destructive mt-1">
              {form.formState.errors.notes.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          キャンセル
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          予約を確定する
        </Button>
      </div>
    </form>
  )
}
