import { z } from "zod"

export const inputParamsSchema = {
  "skill": z.string(),
  "team": z.number().optional()
}