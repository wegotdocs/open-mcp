import { z } from "zod"

export const inputParamsSchema = {
  "channelToStoreLink": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `channelToStoreLink` to the tool, first call the tool `expandSchema` with \"/properties/snippet/properties/channelToStoreLink\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Information specific to a link between a channel and a store on a merchandising platform.</property-description>").optional(),
  "type": z.enum(["linkUnspecified","channelToStoreLink"]).describe("Type of the link named after the entities that are being linked.").optional()
}