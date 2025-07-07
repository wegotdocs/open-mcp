import { z } from "zod"

export const inputParamsSchema = {
  "account": z.string().describe("A wallet address on solana blockchain"),
  "before": z.string().describe("The signature of the latest transaction of previous page").optional(),
  "limit": z.union([z.literal(10), z.literal(20), z.literal(30), z.literal(40)]).describe("Number of items to return").optional()
}