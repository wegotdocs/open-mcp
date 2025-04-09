import { z } from "zod"

export const inputParams = {
  "fieldId": z.string().describe("The ID of the custom field, for example `customfield\\_10000`."),
  "contextId": z.array(z.number().int()).describe("The IDs of the contexts.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}