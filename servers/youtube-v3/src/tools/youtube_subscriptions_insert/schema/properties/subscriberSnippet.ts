import { z } from "zod"

export const inputParamsSchema = {
  "channelId": z.string().describe("The channel ID of the subscriber.").optional(),
  "description": z.string().describe("The description of the subscriber.").optional(),
  "thumbnails": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `thumbnails` to the tool, first call the tool `expandSchema` with \"/properties/subscriberSnippet/properties/thumbnails\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Thumbnails for this subscriber.</property-description>").optional(),
  "title": z.string().describe("The title of the subscriber.").optional()
}