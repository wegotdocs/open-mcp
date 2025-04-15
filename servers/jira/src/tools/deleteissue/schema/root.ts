import { z } from "zod"

export const inputParamsSchema = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "deleteSubtasks": z.enum(["true","false"]).describe("Whether the issue's subtasks are deleted when the issue is deleted.").optional()
}