import { z } from "zod"

export const inputParamsSchema = {
  "transaction_id": z.string().describe("Transaction ID"),
  "element_id": z.string().optional(),
  "element_type": z.string().optional(),
  "autoconciliated": z.number().int().optional()
}