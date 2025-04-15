import { z } from "zod"

export const inputParamsSchema = {
  "projectId": z.number().int().describe("The ID of the project."),
  "level": z.number().int().describe("The level of the issue type to filter by. Use:\n\n *  `-1` for Subtask.\n *  `0` for Base.\n *  `1` for Epic.").optional()
}