import { z } from "zod"

export const inputParamsSchema = {
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.number().int().describe("The ID of the context from which an option should be deleted."),
  "optionId": z.number().int().describe("The ID of the option to delete.")
}