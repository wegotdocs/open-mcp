import { z } from "zod"

export const inputParamsSchema = {
  "includeRecommendations": z.boolean().optional(),
  "includeTrending": z.boolean().optional(),
  "includePopular": z.boolean().optional()
}