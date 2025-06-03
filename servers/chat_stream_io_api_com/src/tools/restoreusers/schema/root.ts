import { z } from "zod"

export const inputParamsSchema = {
  "user_ids": z.array(z.string())
}