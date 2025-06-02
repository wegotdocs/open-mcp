import { z } from "zod"

export const inputParamsSchema = {
  "post_id": z.string().uuid(),
  "comment_id": z.string().uuid()
}