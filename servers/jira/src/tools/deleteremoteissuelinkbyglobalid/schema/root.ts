import { z } from "zod"

export const inputParamsSchema = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "globalId": z.string().describe("The global ID of a remote issue link.")
}