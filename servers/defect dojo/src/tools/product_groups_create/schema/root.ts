import { z } from "zod"

export const inputParamsSchema = {
  "product": z.number().int(),
  "group": z.number().int(),
  "role": z.number().int()
}