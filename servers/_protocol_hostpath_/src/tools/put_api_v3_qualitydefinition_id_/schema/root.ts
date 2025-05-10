import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "quality": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `quality` to the tool, first call the tool `expandSchema` with \"/properties/quality\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "title": z.string().nullable().optional(),
  "weight": z.number().int().optional(),
  "minSize": z.number().nullable().optional(),
  "maxSize": z.number().nullable().optional(),
  "preferredSize": z.number().nullable().optional()
}