import { z } from "zod"

export const inputParamsSchema = {
  "day": z.string(),
  "month": z.string(),
  "year": z.number()
}