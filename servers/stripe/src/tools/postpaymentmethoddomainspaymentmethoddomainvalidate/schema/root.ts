import { z } from "zod"

export const inputParams = {
  "payment_method_domain": z.string().max(5000)
}