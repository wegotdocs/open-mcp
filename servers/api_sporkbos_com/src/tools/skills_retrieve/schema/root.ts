import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this skill."),
  "team": z.number().int().describe("Filter skill by team ID").optional()
}