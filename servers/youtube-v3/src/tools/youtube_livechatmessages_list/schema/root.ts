import { z } from "zod"

export const inputParamsSchema = {
  "liveChatId": z.string().describe("The id of the live chat for which comments should be returned."),
  "part": z.array(z.string()).describe("The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id and snippet."),
  "hl": z.string().describe("Specifies the localization language in which the system messages should be returned.").optional(),
  "maxResults": z.number().int().gte(200).lte(2000).describe("The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.").optional(),
  "pageToken": z.string().describe("The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.").optional(),
  "profileImageSize": z.number().int().gte(16).lte(720).describe("Specifies the size of the profile image that should be returned for each user.").optional()
}