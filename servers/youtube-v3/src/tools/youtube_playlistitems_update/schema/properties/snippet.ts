import { z } from "zod"

export const inputParamsSchema = {
  "channelId": z.string().describe("The ID that YouTube uses to uniquely identify the user that added the item to the playlist.").optional(),
  "channelTitle": z.string().describe("Channel title for the channel that the playlist item belongs to.").optional(),
  "description": z.string().describe("The item's description.").optional(),
  "playlistId": z.string().describe("The ID that YouTube uses to uniquely identify thGe playlist that the playlist item is in.").optional(),
  "position": z.number().int().describe("The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth.").optional(),
  "publishedAt": z.string().datetime({ offset: true }).describe("The date and time that the item was added to the playlist.").optional(),
  "resourceId": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `resourceId` to the tool, first call the tool `expandSchema` with \"/properties/snippet/properties/resourceId\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The id object contains information that can be used to uniquely identify the resource that is included in the playlist as the playlist item.</property-description>").optional(),
  "thumbnails": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `thumbnails` to the tool, first call the tool `expandSchema` with \"/properties/snippet/properties/thumbnails\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>A map of thumbnail images associated with the playlist item. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.</property-description>").optional(),
  "title": z.string().describe("The item's title.").optional(),
  "videoOwnerChannelId": z.string().describe("Channel id for the channel this video belongs to.").optional(),
  "videoOwnerChannelTitle": z.string().describe("Channel title for the channel this video belongs to.").optional()
}