import { z } from "zod"

export const inputParamsSchema = {
  "shipping_rate": z.string().max(5000).optional()
}