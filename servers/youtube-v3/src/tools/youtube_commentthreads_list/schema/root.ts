import { z } from "zod"

export const inputParamsSchema = {
  "part": z.array(z.string()).describe("The *part* parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include."),
  "allThreadsRelatedToChannelId": z.string().describe("Returns the comment threads of all videos of the channel and the channel comments as well.").optional(),
  "channelId": z.string().describe("Returns the comment threads for all the channel comments (ie does not include comments left on videos).").optional(),
  "id": z.array(z.string()).describe("Returns the comment threads with the given IDs for Stubby or Apiary.").optional(),
  "maxResults": z.number().int().gte(1).lte(100).describe("The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.").optional(),
  "moderationStatus": z.enum(["published","heldForReview","likelySpam","rejected"]).describe("Limits the returned comment threads to those with the specified moderation status. Not compatible with the 'id' filter. Valid values: published, heldForReview, likelySpam.").optional(),
  "order": z.enum(["orderUnspecified","time","relevance"]).optional(),
  "pageToken": z.string().describe("The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.").optional(),
  "searchTerms": z.string().describe("Limits the returned comment threads to those matching the specified key words. Not compatible with the 'id' filter.").optional(),
  "textFormat": z.enum(["textFormatUnspecified","html","plainText"]).describe("The requested text format for the returned comments.").optional(),
  "videoId": z.string().describe("Returns the comment threads of the specified video.").optional()
}