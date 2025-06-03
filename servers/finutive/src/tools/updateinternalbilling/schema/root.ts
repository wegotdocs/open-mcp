import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "internal_billing_id": z.string(),
  "payment_method": z.enum(["WANNME","GOCARDLESS","CASH","BANK_TRANSFER","TPV","QONTO","TO_PAY"]).optional(),
  "price": z.number().optional(),
  "discount_type": z.enum(["PERCENTAGE","FIXED","PROMOTIONAL","NA","PAUSED"]).optional(),
  "discount": z.number().optional(),
  "responsable_id": z.string().optional()
}