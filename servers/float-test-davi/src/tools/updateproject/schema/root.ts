import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.number().int().describe("The project's ID"),
  "expand": z.string().describe("Comma-delimited values expands the response with additional fields: `project_tasks` - A list of the project tasks available in this project\n`project_team` - A list of people by `people_id` and their project `hourly_rate`, the `phase_id` will be `0`, the list may be empty").optional()
}