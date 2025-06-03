import { z } from "zod"

export const inputParamsSchema = {
  "transaction_id": z.string().describe("Transaction ID"),
  "is_checked": z.boolean().optional()
}