import { z } from "zod"

export const inputParams = {
  "id": z.string(),
  "type": z.enum(["prepayment","subscription"]),
  "name": z.string(),
  "paymentMethodRequired": z.boolean().optional()
}