import { z } from "zod"

export const inputParamsSchema = {
  "account": z.string().describe("A wallet address on solana blockchain")
}