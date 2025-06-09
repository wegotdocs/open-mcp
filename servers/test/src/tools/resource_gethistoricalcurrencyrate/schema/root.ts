import { z } from "zod"

export const inputParamsSchema = {
  "lang": z.string(),
  "currency": z.string(),
  "startDate": z.string(),
  "endDate": z.string()
}