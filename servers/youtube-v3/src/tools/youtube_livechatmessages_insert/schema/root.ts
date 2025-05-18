import { z } from "zod"

export const inputParamsSchema = {
  "part": z.array(z.string()).describe("The *part* parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet."),
  "authorDetails": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `authorDetails` to the tool, first call the tool `expandSchema` with \"/properties/authorDetails\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The authorDetails object contains basic details about the user that posted this message.</property-description>").optional(),
  "etag": z.string().describe("Etag of this resource.").optional(),
  "id": z.string().describe("The ID that YouTube assigns to uniquely identify the message.").optional(),
  "kind": z.string().describe("Identifies what kind of resource this is. Value: the fixed string \"youtube#liveChatMessage\".").optional(),
  "snippet": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `snippet` to the tool, first call the tool `expandSchema` with \"/properties/snippet\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The snippet object contains basic details about the message.</property-description>").optional()
}