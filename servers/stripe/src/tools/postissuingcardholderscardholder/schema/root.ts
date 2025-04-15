import { z } from "zod"

export const inputParamsSchema = {
  "cardholder": z.string().max(5000)
}