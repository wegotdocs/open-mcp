import { z } from "zod"

export const inputParamsSchema = {
  "account_ids": z.array(z.string()).describe("An array of `account_ids` to retrieve for the Account.").optional()
}