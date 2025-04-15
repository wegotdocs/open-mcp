import { z } from "zod"

export const inputParamsSchema = {
  "quote": z.string().max(5000)
}