import { z } from "zod"

export const inputParamsSchema = {
  "part": z.array(z.string()).describe("The *part* parameter specifies a comma-separated list of one or more comment resource properties that the API response will include."),
  "id": z.array(z.string()).describe("Returns the comments with the given IDs for One Platform.").optional(),
  "maxResults": z.number().int().gte(1).lte(100).describe("The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.").optional(),
  "pageToken": z.string().describe("The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.").optional(),
  "parentId": z.string().describe("Returns replies to the specified comment. Note, currently YouTube features only one level of replies (ie replies to top level comments). However replies to replies may be supported in the future.").optional(),
  "textFormat": z.enum(["textFormatUnspecified","html","plainText"]).describe("The requested text format for the returned comments.").optional()
}