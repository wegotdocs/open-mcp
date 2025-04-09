import { z } from "zod"

export const inputParams = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "changelogIds": z.array(z.number().int()).describe("The list of changelog IDs.")
}