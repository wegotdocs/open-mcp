import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "invoiceId": z.string(),
  "accounting_account_id": z.string().optional()
}