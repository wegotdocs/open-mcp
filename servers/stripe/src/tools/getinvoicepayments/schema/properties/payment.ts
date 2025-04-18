import { z } from "zod"

export const inputParamsSchema = {
  "payment_intent": z.string().max(5000).optional(),
  "type": z.literal("payment_intent")
}