import { z } from "zod"

export const inputParamsSchema = {
  "accountId": z.string().describe("The ID of the fiat account to return")
}