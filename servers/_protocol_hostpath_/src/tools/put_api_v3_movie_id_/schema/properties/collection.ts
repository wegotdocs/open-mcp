import { z } from "zod"

export const inputParamsSchema = {
  "title": z.string().nullable().optional(),
  "tmdbId": z.number().int().optional()
}