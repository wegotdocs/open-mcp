import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "line_activities": z.array(z.string()).optional(),
  "invoice_tags": z.array(z.string()).optional(),
  "clients": z.array(z.string()).optional(),
  "providers": z.array(z.string()).optional(),
  "start_date": z.string().datetime({ offset: true }),
  "end_date": z.string().datetime({ offset: true })
}