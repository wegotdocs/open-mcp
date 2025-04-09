import { z } from "zod"

export const inputParams = {
  "quote": z.string().max(5000)
}