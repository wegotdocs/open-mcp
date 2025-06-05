import { z } from "zod"

export const inputParamsSchema = {
  "base": z.number(),
  "exponent": z.number()
}