import { z } from "zod"

export const inputParamsSchema = {
  "authorChannelId": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `authorChannelId` to the tool, first call the tool `expandSchema` with \"/properties/snippet/properties/authorChannelId\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The id of the author's YouTube channel, if any.</property-description>").optional(),
  "authorChannelUrl": z.string().describe("Link to the author's YouTube channel, if any.").optional(),
  "authorDisplayName": z.string().describe("The name of the user who posted the comment.").optional(),
  "authorProfileImageUrl": z.string().describe("The URL for the avatar of the user who posted the comment.").optional(),
  "canRate": z.boolean().describe("Whether the current viewer can rate this comment.").optional(),
  "channelId": z.string().describe("The id of the corresponding YouTube channel. In case of a channel comment this is the channel the comment refers to. In case of a video comment it's the video's channel.").optional(),
  "likeCount": z.number().int().describe("The total number of likes this comment has received.").optional(),
  "moderationStatus": z.enum(["published","heldForReview","likelySpam","rejected"]).describe("The comment's moderation status. Will not be set if the comments were requested through the id filter.").optional(),
  "parentId": z.string().describe("The unique id of the parent comment, only set for replies.").optional(),
  "publishedAt": z.string().datetime({ offset: true }).describe("The date and time when the comment was originally published.").optional(),
  "textDisplay": z.string().describe("The comment's text. The format is either plain text or HTML dependent on what has been requested. Even the plain text representation may differ from the text originally posted in that it may replace video links with video titles etc.").optional(),
  "textOriginal": z.string().describe("The comment's original raw text as initially posted or last updated. The original text will only be returned if it is accessible to the viewer, which is only guaranteed if the viewer is the comment's author.").optional(),
  "updatedAt": z.string().datetime({ offset: true }).describe("The date and time when the comment was last updated.").optional(),
  "videoId": z.string().describe("The ID of the video the comment refers to, if any.").optional(),
  "viewerRating": z.enum(["none","like","dislike"]).describe("The rating the viewer has given to this comment. For the time being this will never return RATE_TYPE_DISLIKE and instead return RATE_TYPE_NONE. This may change in the future.").optional()
}