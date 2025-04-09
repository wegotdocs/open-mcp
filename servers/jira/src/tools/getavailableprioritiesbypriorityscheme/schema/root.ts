import { z } from "zod"

export const inputParams = {
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "query": z.string().describe("The string to query priorities on by name.").optional(),
  "schemeId": z.string().describe("The priority scheme ID."),
  "exclude": z.array(z.string()).describe("A list of priority IDs to exclude from the results.").optional()
}