import { z } from "zod"

export const inputParamsSchema = {
  "type": z.string().describe("The type of the response format.").optional(),
  "schema": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `schema` to the tool, first call the tool `expandSchema` with \"/properties/response_format/properties/schema\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The schema of the response format.</property-description>").optional()
}