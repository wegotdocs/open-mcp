import { z } from "zod"

export const inputParamsSchema = {
  "liveChatId": z.string().describe("The ID of the live chat this moderator can act on.").optional(),
  "moderatorDetails": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `moderatorDetails` to the tool, first call the tool `expandSchema` with \"/properties/snippet/properties/moderatorDetails\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Details about the moderator.</property-description>").optional()
}