import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this skill training."),
  "team": z.number().int().describe("Filter skill training by team ID").optional()
}