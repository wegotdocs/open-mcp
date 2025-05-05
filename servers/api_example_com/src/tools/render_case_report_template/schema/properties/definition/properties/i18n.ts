import { z } from "zod"

export const inputParamsSchema = {
  "lang": z.string().optional()
}