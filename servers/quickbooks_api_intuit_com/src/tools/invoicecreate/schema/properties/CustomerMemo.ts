import { z } from "zod"

export const inputParamsSchema = {
  "value": z.string().describe("User-entered message to the customer; this message is visible to the end user on their transactions.").optional()
}