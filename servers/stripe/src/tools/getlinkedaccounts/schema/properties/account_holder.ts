import { z } from "zod"

export const inputParamsSchema = {
  "account": z.string().max(5000).optional(),
  "customer": z.string().max(5000).optional()
}