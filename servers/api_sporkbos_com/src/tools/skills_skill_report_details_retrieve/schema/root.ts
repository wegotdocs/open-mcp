import { z } from "zod"

export const inputParamsSchema = {
  "skill": z.string().describe("Filter by skill name.").optional(),
  "team": z.number().int().describe("Filter by team ID."),
  "user": z.number().int().describe("Filter by user ID.").optional(),
  "view_by": z.enum(["level","score"]).describe("View skill report by 'level' or 'score'.").optional()
}