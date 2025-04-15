import { z } from "zod"

export const inputParamsSchema = {
  "intent": z.string().max(5000)
}