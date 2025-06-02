import { z } from "zod"

export const inputParamsSchema = {
  "version": z.string(),
  "country": z.string(),
  "language": z.string(),
  "url": z.string().url().optional(),
  "pageType": z.string().optional()
}