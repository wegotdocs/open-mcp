import { z } from "zod"

export const inputParamsSchema = {
  "case": z.string().optional()
}