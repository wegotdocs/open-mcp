import { z } from "zod"

export const inputParamsSchema = {
  "payment_method": z.string().max(5000)
}