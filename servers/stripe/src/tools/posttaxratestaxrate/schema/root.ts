import { z } from "zod"

export const inputParams = {
  "tax_rate": z.string().max(5000)
}