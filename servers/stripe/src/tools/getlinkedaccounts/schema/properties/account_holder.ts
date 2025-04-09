import { z } from "zod"

export const inputParams = {
  "account": z.string().max(5000).optional(),
  "customer": z.string().max(5000).optional()
}