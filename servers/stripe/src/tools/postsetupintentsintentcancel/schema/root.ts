import { z } from "zod"

export const inputParams = {
  "intent": z.string().max(5000)
}