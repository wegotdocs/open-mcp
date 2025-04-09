import { z } from "zod"

export const inputParams = {
  "invoice": z.string().max(5000)
}