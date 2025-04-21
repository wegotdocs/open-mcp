import { z } from "zod"

export const inputParamsSchema = {
  "ticker": z.string(),
  "date": z.string().optional()
}