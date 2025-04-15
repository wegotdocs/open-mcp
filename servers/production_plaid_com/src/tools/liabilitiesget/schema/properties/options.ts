import { z } from "zod"

export const inputParamsSchema = {
  "account_ids": z.array(z.string()).describe("A list of accounts to retrieve for the Item.\n\nAn error will be returned if a provided `account_id` is not associated with the Item").optional()
}