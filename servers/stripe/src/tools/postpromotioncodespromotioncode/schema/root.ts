import { z } from "zod"

export const inputParamsSchema = {
  "promotion_code": z.string().max(5000)
}