import { z } from "zod"

export const inputParams = {
  "shipping_rate": z.string().max(5000).optional()
}