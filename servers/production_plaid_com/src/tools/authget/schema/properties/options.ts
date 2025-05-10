import { z } from "zod"

export const inputParamsSchema = {
  "account_ids": z.array(z.string()).describe("A list of `account_ids` to retrieve for the Item.\nNote: An error will be returned if a provided `account_id` is not associated with the Item.").optional()
}