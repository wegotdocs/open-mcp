import { z } from "zod"

export const inputParamsSchema = {
  "issueIdOrKey": z.string().describe("The key or ID of the issue."),
  "propertyKey": z.string().describe("The key of the property.")
}