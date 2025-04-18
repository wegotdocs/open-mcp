import { z } from "zod"

export const inputParamsSchema = {
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "project_id": z.number().int().describe("The unique identifier of the project.")
}