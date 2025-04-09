import { z } from "zod"

export const inputParams = {
  "issueTypeSchemeId": z.number().int().describe("The ID of the issue type scheme."),
  "issueTypeIds": z.array(z.string()).describe("The list of issue type IDs.")
}