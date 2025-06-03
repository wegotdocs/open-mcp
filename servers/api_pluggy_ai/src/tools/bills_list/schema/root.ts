import { z } from "zod"

export const inputParamsSchema = {
  "accountId": z.string().uuid().describe("Account's primary identifier")
}