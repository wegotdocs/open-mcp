import { z } from "zod"

export const inputParamsSchema = {
  "comment_id": z.string().uuid()
}