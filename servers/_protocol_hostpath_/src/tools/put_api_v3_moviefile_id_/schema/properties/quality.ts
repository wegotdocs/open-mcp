import { z } from "zod"

export const inputParamsSchema = {
  "quality": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `quality` to the tool, first call the tool `expandSchema` with \"/properties/quality/properties/quality\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "revision": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `revision` to the tool, first call the tool `expandSchema` with \"/properties/quality/properties/revision\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}