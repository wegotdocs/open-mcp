import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this skill."),
  "name": z.string().optional(),
  "stage": z.string().optional(),
  "team": z.number().optional()
}