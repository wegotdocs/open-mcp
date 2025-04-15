import { z } from "zod"

export const inputParamsSchema = {
  "workflowSchemeId": z.string().describe("The workflow scheme ID"),
  "nextPageToken": z.string().describe("The cursor for pagination").optional(),
  "maxResults": z.number().int().describe("The maximum number of results to return. Must be an integer between 1 and 200.").optional()
}