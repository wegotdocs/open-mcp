import { z } from "zod"

export const inputParamsSchema = {
  "part": z.array(z.string()).describe("The *part* parameter specifies the member resource parts that the API response will include. Set the parameter value to snippet."),
  "filterByMemberChannelId": z.string().describe("Comma separated list of channel IDs. Only data about members that are part of this list will be included in the response.").optional(),
  "hasAccessToLevel": z.string().describe("Filter members in the results set to the ones that have access to a level.").optional(),
  "maxResults": z.number().int().gte(0).lte(1000).describe("The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.").optional(),
  "mode": z.enum(["listMembersModeUnknown","updates","all_current"]).describe("Parameter that specifies which channel members to return.").optional(),
  "pageToken": z.string().describe("The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.").optional()
}