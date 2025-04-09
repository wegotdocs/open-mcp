import { z } from "zod"

export const inputParams = {
  "payment_method": z.string().max(5000)
}