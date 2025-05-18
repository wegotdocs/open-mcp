import { z } from "zod"

export const inputParamsSchema = {
  "actualEndTime": z.string().datetime({ offset: true }).describe("The date and time that the broadcast actually ended. This information is only available once the broadcast's state is complete.").optional(),
  "actualStartTime": z.string().datetime({ offset: true }).describe("The date and time that the broadcast actually started. This information is only available once the broadcast's state is live.").optional(),
  "channelId": z.string().describe("The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast.").optional(),
  "description": z.string().describe("The broadcast's description. As with the title, you can set this field by modifying the broadcast resource or by setting the description field of the corresponding video resource.").optional(),
  "isDefaultBroadcast": z.boolean().describe("Indicates whether this broadcast is the default broadcast. Internal only.").optional(),
  "liveChatId": z.string().describe("The id of the live chat for this broadcast.").optional(),
  "publishedAt": z.string().datetime({ offset: true }).describe("The date and time that the broadcast was added to YouTube's live broadcast schedule.").optional(),
  "scheduledEndTime": z.string().datetime({ offset: true }).describe("The date and time that the broadcast is scheduled to end.").optional(),
  "scheduledStartTime": z.string().datetime({ offset: true }).describe("The date and time that the broadcast is scheduled to start.").optional(),
  "thumbnails": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `thumbnails` to the tool, first call the tool `expandSchema` with \"/properties/snippet/properties/thumbnails\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>A map of thumbnail images associated with the broadcast. For each nested object in this object, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.</property-description>").optional(),
  "title": z.string().describe("The broadcast's title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by setting the title field of the corresponding video resource.").optional()
}