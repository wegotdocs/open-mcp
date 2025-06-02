import { z } from "zod"

export const inputParamsSchema = {
  "payoutId": z.string().describe("the payout id received from the creation of the payout instruction set")
}