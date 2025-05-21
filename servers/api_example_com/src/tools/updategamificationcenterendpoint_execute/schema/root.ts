import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("User ID"),
  "interactionsCount": z.number().describe("User Interactions").optional(),
  "tokens": z.number().describe("User Tokens").optional()
}