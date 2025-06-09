import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "transaction_type": z.enum(["0","1","2","3","4","5","6","7","8","9","10","11","12","13"]),
  "transaction_debet_id": z.number(),
  "transaction_credit_id": z.number(),
  "transaction_amount": z.number().gte(0.01),
  "document": z.union([z.string(), z.null()]).optional(),
  "date": z.union([z.string(), z.null()]).optional(),
  "transaction_currency": z.number(),
  "description": z.union([z.string(), z.null()]).optional(),
  "connection": z.union([z.string(), z.null()]).optional(),
  "quantity": z.union([z.string(), z.null()]).optional(),
  "transaction_id": z.number().optional(),
  "unit_id": z.union([z.number(), z.null()]).optional()
}