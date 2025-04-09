import { z } from "zod"

export const inputParams = {
  "promotion_code": z.string().max(5000)
}