import { z } from "zod"

export const inputParams = {
  "issueTypeScreenSchemeId": z.number().int().describe("The ID of the issue type screen scheme."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "query": z.string().optional()
}