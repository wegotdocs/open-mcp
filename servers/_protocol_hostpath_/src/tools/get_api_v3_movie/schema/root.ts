import { z } from "zod"

export const inputParamsSchema = {
  "tmdbId": z.number().int().optional(),
  "excludeLocalCovers": z.boolean().optional(),
  "languageId": z.number().int().optional()
}