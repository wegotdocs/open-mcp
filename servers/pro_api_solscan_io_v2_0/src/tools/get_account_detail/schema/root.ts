import { z } from "zod"

export const inputParamsSchema = {
  "address": z.string().describe("A wallet address on solana blockchain")
}