import { z } from "zod"

export const inputParamsSchema = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "propertyKey": z.string().describe("The key of the issue property. The maximum length is 255 characters.")
}