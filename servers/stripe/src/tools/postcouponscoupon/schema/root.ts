import { z } from "zod"

export const inputParamsSchema = {
  "coupon": z.string().max(5000)
}