import { z } from "zod"

export const inputParams = {
  "a": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `a` to the tool, first call the tool `expandSchema` with \"/properties/a\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "b": z.string().describe("1").optional(),
  "de": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `de` to the tool, first call the tool `expandSchema` with \"/properties/de\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "stringbuff": z.string().describe("1").optional()
}