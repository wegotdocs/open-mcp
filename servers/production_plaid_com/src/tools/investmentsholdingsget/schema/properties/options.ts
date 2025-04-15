import { z } from "zod"

export const inputParamsSchema = {
  "account_ids": z.array(z.string()).describe("An array of `account_id`s to retrieve for the Item. An error will be returned if a provided `account_id` is not associated with the Item.").optional()
}