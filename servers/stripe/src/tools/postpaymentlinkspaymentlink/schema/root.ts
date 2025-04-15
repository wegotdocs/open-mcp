import { z } from "zod"

export const inputParamsSchema = {
  "payment_link": z.string().max(5000)
}