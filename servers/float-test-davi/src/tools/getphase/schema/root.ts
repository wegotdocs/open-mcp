import { z } from "zod"

export const inputParamsSchema = {
  "phase_id": z.number().int().describe("The phase's ID"),
  "expand": z.string().describe("Comma-delimited values expands the response with additional fields: `phase_tasks` - A list of the project tasks available in this phase `phase_team` - A list of assignees on this phase by `people_id` and `hourly_rate`, the list may be empty`").optional()
}