import { z } from "zod"

export const inputParamsSchema = {
  "statusId": z.string().describe("The statusId to fetch project usages for"),
  "nextPageToken": z.string().describe("The cursor for pagination").optional(),
  "maxResults": z.number().int().describe("The maximum number of results to return. Must be an integer between 1 and 200.").optional()
}