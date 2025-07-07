import { z } from "zod"

export const inputParamsSchema = {
  "account": z.string().describe("A wallet address on solana blockchain"),
  "limit": z.union([z.literal(10), z.literal(20), z.literal(30), z.literal(40)]).describe("Number of items to return").optional(),
  "offset": z.number().int().describe("Number of items to skip").optional()
}