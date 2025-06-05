import { z } from "zod"

export const inputParamsSchema = {
  "current_skill_only": z.boolean().optional(),
  "team": z.number().int().describe("Team ID required for import")
}