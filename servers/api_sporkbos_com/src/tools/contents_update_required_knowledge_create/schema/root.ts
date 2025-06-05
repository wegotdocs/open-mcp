import { z } from "zod"

export const inputParamsSchema = {
  "position": z.number().int(),
  "content_states": z.array(z.object({ "content": z.number().int(), "is_checked": z.boolean() }))
}