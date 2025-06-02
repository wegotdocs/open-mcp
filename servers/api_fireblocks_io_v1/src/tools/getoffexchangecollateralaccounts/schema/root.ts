import { z } from "zod"

export const inputParamsSchema = {
  "mainExchangeAccountId": z.string().describe("The id of the main exchange account for which the requested collateral account is associated with")
}