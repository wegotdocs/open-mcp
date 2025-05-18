import { z } from "zod"

export const inputParamsSchema = {
  "part": z.array(z.string()).describe("The *part* parameter specifies the superChatEvent resource parts that the API response will include. This parameter is currently not supported."),
  "hl": z.string().describe("Return rendered funding amounts in specified language.").optional(),
  "maxResults": z.number().int().gte(1).lte(50).describe("The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.").optional(),
  "pageToken": z.string().describe("The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.").optional()
}