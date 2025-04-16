import { z } from "zod"

export const inputParamsSchema = {
  "code_interpreter": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `code_interpreter` to the tool, first call the tool `expandSchema` with \"/properties/tool_resources/properties/code_interpreter\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "file_search": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `file_search` to the tool, first call the tool `expandSchema` with \"/properties/tool_resources/properties/file_search\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}