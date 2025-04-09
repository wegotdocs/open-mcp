import { z } from "zod"

export const inputParams = {
  "cardholder": z.string().max(5000)
}