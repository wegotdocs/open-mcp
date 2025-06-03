import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "internal_billing_id": z.string(),
  "price": z.number().optional(),
  "vat_percentage": z.number().optional(),
  "discount_type": z.enum(["PERCENTAGE","FIXED","PROMOTIONAL","NA","PAUSED"]).optional(),
  "discount": z.number().optional(),
  "date": z.string().date().optional(),
  "rectification_reason": z.string().optional(),
  "payment_method": z.enum(["WANNME","GOCARDLESS","CASH","BANK_TRANSFER","TPV","QONTO","TO_PAY"]).optional()
}