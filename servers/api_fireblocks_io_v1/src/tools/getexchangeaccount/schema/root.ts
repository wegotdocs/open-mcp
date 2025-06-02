import { z } from "zod"

export const inputParamsSchema = {
  "exchangeAccountId": z.string().describe("The ID of the exchange account to return")
}