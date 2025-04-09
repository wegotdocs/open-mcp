import { z } from "zod"

export const inputParams = {
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.string()).describe("The list of resolutions IDs to be filtered out").optional(),
  "onlyDefault": z.boolean().describe("When set to true, return default only, when IDs provided, if none of them is default, return empty page. Default value is false").optional()
}