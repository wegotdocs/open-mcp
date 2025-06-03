import { z } from "zod"

export const inputParamsSchema = {
  "account_id": z.string().describe("Account ID"),
  "delete_transactions": z.boolean().optional()
}