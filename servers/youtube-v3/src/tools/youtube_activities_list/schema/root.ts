import { z } from "zod"

export const inputParamsSchema = {
  "part": z.array(z.string()).describe("The *part* parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set *part=snippet*, the API response will also contain all of those nested properties."),
  "channelId": z.string().optional(),
  "home": z.boolean().optional(),
  "maxResults": z.number().int().gte(0).lte(50).describe("The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.").optional(),
  "mine": z.boolean().optional(),
  "pageToken": z.string().describe("The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.").optional(),
  "publishedAfter": z.string().optional(),
  "publishedBefore": z.string().optional(),
  "regionCode": z.string().optional()
}