import { z } from "zod"

export const inputParamsSchema = {
  "maxResults": z.number().int().describe("The maximum number of results that could be on the page.").optional(),
  "priorities": z.string().optional(),
  "projects": z.string().optional(),
  "schemeId": z.number().int().describe("The id of the priority scheme.").optional(),
  "startAt": z.number().int().describe("The index of the first item returned on the page.").optional()
}