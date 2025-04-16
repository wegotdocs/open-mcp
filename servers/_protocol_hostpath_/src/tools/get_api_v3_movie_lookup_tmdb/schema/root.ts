import { z } from "zod"

export const inputParamsSchema = {
  "tmdbId": z.number().int().optional()
}