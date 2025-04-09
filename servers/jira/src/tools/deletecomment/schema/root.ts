import { z } from "zod"

export const inputParams = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "id": z.string().describe("The ID of the comment.")
}