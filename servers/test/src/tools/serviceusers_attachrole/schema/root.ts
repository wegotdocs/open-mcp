import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "user_ids": z.array(z.string()),
  "role": z.number().int()
}