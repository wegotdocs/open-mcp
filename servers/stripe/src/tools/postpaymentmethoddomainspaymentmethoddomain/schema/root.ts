import { z } from "zod"

export const inputParamsSchema = {
  "payment_method_domain": z.string().max(5000)
}