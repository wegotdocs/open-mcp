import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "operation_id": z.number().optional(),
  "transaction_ids": z.array(z.string()).optional()
}