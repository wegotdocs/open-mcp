import { z } from "zod"

export const inputParamsSchema = {
  "scorecard": z.number().int(),
  "team": z.number().int(),
  "is_favorite": z.boolean()
}