import { z } from "zod"

export const inputParamsSchema = {
  "channelId": z.string().describe("The ID that YouTube uses to uniquely identify the subscriber's channel.").optional(),
  "channelTitle": z.string().describe("Channel title for the channel that the subscription belongs to.").optional(),
  "description": z.string().describe("The subscription's details.").optional(),
  "publishedAt": z.string().datetime({ offset: true }).describe("The date and time that the subscription was created.").optional(),
  "resourceId": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `resourceId` to the tool, first call the tool `expandSchema` with \"/properties/snippet/properties/resourceId\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The id object contains information about the channel that the user subscribed to.</property-description>").optional(),
  "thumbnails": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `thumbnails` to the tool, first call the tool `expandSchema` with \"/properties/snippet/properties/thumbnails\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.</property-description>").optional(),
  "title": z.string().describe("The subscription's title.").optional()
}