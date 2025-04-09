import { z } from "zod"

export const inputParams = {
  "type": z.literal("json_schema"),
  "json_schema": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `json_schema` to the tool, first call the tool `expandSchema` with \"/properties/response_format/properties/json_schema\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The JSON Schema that should be used to validate and format the response</property-description>")
}