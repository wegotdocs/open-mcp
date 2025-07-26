import { z } from "zod"

export const inputParamsSchema = {
  "product": z.number().int(),
  "user": z.number().int(),
  "role": z.number().int()
}