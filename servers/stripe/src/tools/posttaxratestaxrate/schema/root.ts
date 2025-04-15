import { z } from "zod"

export const inputParamsSchema = {
  "tax_rate": z.string().max(5000)
}