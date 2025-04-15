import { z } from "zod"

export const inputParamsSchema = {
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.number().int().describe("The ID of the context."),
  "issueTypeIds": z.array(z.string()).describe("The list of issue type IDs.")
}