import { z } from "zod"

export const inputParamsSchema = {
  "liveChatId": z.string().describe("The id of the live chat for which moderators should be returned."),
  "part": z.array(z.string()).describe("The *part* parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet."),
  "maxResults": z.number().int().gte(0).lte(50).describe("The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.").optional(),
  "pageToken": z.string().describe("The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.").optional()
}