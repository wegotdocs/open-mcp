import { z } from "zod"

export const inputParamsSchema = {
  "canReply": z.boolean().describe("Whether the current viewer of the thread can reply to it. This is viewer specific - other viewers may see a different value for this field.").optional(),
  "channelId": z.string().describe("The YouTube channel the comments in the thread refer to or the channel with the video the comments refer to. If video_id isn't set the comments refer to the channel itself.").optional(),
  "isPublic": z.boolean().describe("Whether the thread (and therefore all its comments) is visible to all YouTube users.").optional(),
  "topLevelComment": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `topLevelComment` to the tool, first call the tool `expandSchema` with \"/properties/snippet/properties/topLevelComment\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The top level comment of this thread.</property-description>").optional(),
  "totalReplyCount": z.number().int().describe("The total number of replies (not including the top level comment).").optional(),
  "videoId": z.string().describe("The ID of the video the comments refer to, if any. No video_id implies a channel discussion comment.").optional()
}