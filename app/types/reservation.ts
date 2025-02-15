export type DailyTimeSlot = {
  slot_id: string
  capacity: number
  start_time: string
  end_time: string
  date: string
  is_sold_out: boolean
  available_capacity: number
}

export type MenuItem = {
  menu_id: string
  name: string
  description: string
  price: number
  duration: number
  image_url?: string
}

export type ReservationStep = "select" | "form" | "complete"

export type ReservationFormData = {
  name: string
  email: string
  phone_number: string
  number_of_people: number
  notes?: string
  planName: string
  date: string
  time: string
  menu_id: string
}
