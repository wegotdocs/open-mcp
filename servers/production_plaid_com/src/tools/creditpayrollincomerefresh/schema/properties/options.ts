import { z } from "zod"

export const inputParamsSchema = {
  "item_ids": z.array(z.string()).describe("An array of `item_id`s to be refreshed. Each `item_id` should uniquely identify a payroll income item. If this field is not provided, all `item_id`s associated with the `user_token` will be refreshed.").optional(),
  "webhook": z.string().describe("The URL where Plaid will send the payroll income refresh webhook.").optional()
}