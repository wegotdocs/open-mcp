import { z } from "zod"

export const inputParams = {
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.number().int().describe("The ID of the context."),
  "optionId": z.number().int().describe("The ID of the option.").optional(),
  "onlyOptions": z.boolean().describe("Whether only options are returned.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}