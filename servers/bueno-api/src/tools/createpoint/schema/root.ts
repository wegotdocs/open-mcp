import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name of the Point"),
  "type": z.enum(["boolean","number","multistate - string","multistate - numeric"]).describe("Type of the Point"),
  "unit": z.any().optional(),
  "tags": z.array(z.string()).describe("Strings applied to the Point to add context and used for analytics").optional(),
  "props": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `props` to the tool, first call the tool `expandSchema` with \"/properties/props\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Additional key-value typed properties associated with the Point</property-description>").optional(),
  "refs": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `refs` to the tool, first call the tool `expandSchema` with \"/properties/refs\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Upstream references for the Point</property-description>")
}