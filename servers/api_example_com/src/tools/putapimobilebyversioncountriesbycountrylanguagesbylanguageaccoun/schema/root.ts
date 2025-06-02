import { z } from "zod"

export const inputParamsSchema = {
  "version": z.string(),
  "country": z.string(),
  "language": z.string(),
  "day": z.string(),
  "month": z.string(),
  "year": z.number()
}