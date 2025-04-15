import { z } from "zod"

export const inputParamsSchema = {
  "entitiesIds": z.array(z.number().int()).min(1).max(10000).describe("A list of entity property IDs.").optional(),
  "properties": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `properties` to the tool, first call the tool `expandSchema` with \"/properties/properties\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>A list of entity property keys and values.</property-description>").optional()
}