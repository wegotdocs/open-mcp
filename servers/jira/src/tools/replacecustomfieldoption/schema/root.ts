import { z } from "zod"

export const inputParams = {
  "fieldId": z.string().describe("The ID of the custom field."),
  "optionId": z.number().int().describe("The ID of the option to be deselected."),
  "contextId": z.number().int().describe("The ID of the context."),
  "replaceWith": z.number().int().describe("The ID of the option that will replace the currently selected option.").optional(),
  "jql": z.string().describe("A JQL query that specifies the issues to be updated. For example, *project=10000*.").optional()
}