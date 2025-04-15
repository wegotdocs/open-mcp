import { z } from "zod"

export const inputParamsSchema = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "id": z.string().describe("The ID of the worklog."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts\n\n`properties`, which returns worklog properties.").optional()
}