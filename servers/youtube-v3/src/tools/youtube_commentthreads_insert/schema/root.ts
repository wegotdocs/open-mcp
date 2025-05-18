import { z } from "zod"

export const inputParamsSchema = {
  "part": z.array(z.string()).describe("The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units."),
  "etag": z.string().describe("Etag of this resource.").optional(),
  "id": z.string().describe("The ID that YouTube uses to uniquely identify the comment thread.").optional(),
  "kind": z.string().describe("Identifies what kind of resource this is. Value: the fixed string \"youtube#commentThread\".").optional(),
  "replies": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `replies` to the tool, first call the tool `expandSchema` with \"/properties/replies\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The replies object contains a limited number of replies (if any) to the top level comment found in the snippet.</property-description>").optional(),
  "snippet": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `snippet` to the tool, first call the tool `expandSchema` with \"/properties/snippet\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The snippet object contains basic details about the comment thread and also the top level comment.</property-description>").optional()
}