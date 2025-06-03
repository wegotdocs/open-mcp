import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "invoice_id": z.string()
}