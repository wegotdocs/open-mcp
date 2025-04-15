import { z } from "zod"

export const inputParamsSchema = {
  "shipping_rate_token": z.string().max(5000)
}