import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "invoiceId": z.string(),
  "paymentStatusId": z.string()
}