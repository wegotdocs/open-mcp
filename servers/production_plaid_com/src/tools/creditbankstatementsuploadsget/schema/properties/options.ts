import { z } from "zod"

export const inputParamsSchema = {
  "item_ids": z.array(z.string()).describe("An array of `item_id`s whose bank statements information is returned. Each `item_id` should uniquely identify a bank statements uploaded item. If this field is not provided, all `item_id`s associated with the `user_token` will returned in the response.").optional()
}