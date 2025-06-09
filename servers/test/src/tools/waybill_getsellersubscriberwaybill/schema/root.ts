import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "statuses": z.array(z.string()).optional(),
  "car_number": z.string().optional(),
  "buyer_tin": z.string().optional(),
  "itypes": z.array(z.string()).optional(),
  "begin_date_start": z.string().optional(),
  "begin_date_end": z.string().optional(),
  "create_date_start": z.string().optional(),
  "create_date_end": z.string().optional(),
  "driver_tin": z.string().optional(),
  "delivery_date_start": z.string().optional(),
  "delivery_date_end": z.string().optional(),
  "full_amount": z.string().optional(),
  "waybill_number": z.string().optional(),
  "close_date_start": z.string().optional(),
  "close_date_end": z.string().optional(),
  "user_ids": z.array(z.string()).optional(),
  "comment": z.string().optional()
}