import { z } from "zod"

export const inputParamsSchema = {
  "after": z.string().describe("Identifier for the last job from the previous pagination request.").optional(),
  "limit": z.number().int().describe("Number of fine-tuning jobs to retrieve.").optional(),
  "metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `metadata` to the tool, first call the tool `expandSchema` with \"/properties/metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Optional metadata filter. To filter, use the syntax `metadata[k]=v`. Alternatively, set `metadata=null` to indicate no metadata.\n</property-description>").optional()
}