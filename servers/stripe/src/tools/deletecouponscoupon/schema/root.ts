import { z } from "zod"

export const inputParams = {
  "coupon": z.string().max(5000)
}