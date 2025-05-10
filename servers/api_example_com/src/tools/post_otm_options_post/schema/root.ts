import { z } from "zod"

export const inputParamsSchema = {
  "ticker": z.string(),
  "expiration_date": z.string().optional()
}