import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Server."),
  "description": z.string().describe("Description of the Image, will be auto-generated if not set").optional(),
  "labels": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `labels` to the tool, first call the tool `expandSchema` with \"/properties/labels\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User-defined labels (`key/value` pairs) for the Resource.\nFor more information, see \"[Labels](#labels)\".\n</property-description>").optional(),
  "type": z.enum(["backup","snapshot"]).describe("Type of Image to create.").optional()
}