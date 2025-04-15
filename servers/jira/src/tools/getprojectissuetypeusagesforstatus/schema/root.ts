import { z } from "zod"

export const inputParamsSchema = {
  "statusId": z.string().describe("The statusId to fetch issue type usages for"),
  "projectId": z.string().describe("The projectId to fetch issue type usages for"),
  "nextPageToken": z.string().describe("The cursor for pagination").optional(),
  "maxResults": z.number().int().describe("The maximum number of results to return. Must be an integer between 1 and 200.").optional()
}