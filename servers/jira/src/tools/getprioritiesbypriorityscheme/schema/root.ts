import { z } from "zod"

export const inputParamsSchema = {
  "schemeId": z.string().describe("The priority scheme ID."),
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional()
}