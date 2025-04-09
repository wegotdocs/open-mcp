import { z } from "zod"

export const inputParams = {
  "issueIdOrKey": z.string().describe("The key or ID of the issue."),
  "propertyKey": z.string().describe("The key of the property.")
}