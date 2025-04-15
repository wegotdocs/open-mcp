import { z } from "zod"

export const inputParamsSchema = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "linkId": z.string().describe("The ID of the remote issue link.")
}