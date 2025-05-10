import { z } from "zod"

export const inputParamsSchema = {
  "ranker": z.enum(["auto","default-2024-11-15"]).optional(),
  "score_threshold": z.number().gte(0).lte(1).optional()
}