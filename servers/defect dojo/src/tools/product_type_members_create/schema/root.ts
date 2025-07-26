import { z } from "zod"

export const inputParamsSchema = {
  "product_type": z.number().int(),
  "user": z.number().int(),
  "role": z.number().int()
}