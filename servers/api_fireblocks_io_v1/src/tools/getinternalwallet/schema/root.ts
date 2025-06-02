import { z } from "zod"

export const inputParamsSchema = {
  "walletId": z.string().describe("The ID of the wallet to return")
}