import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Feedback ID"),
  "value": z.number().int().gte(-10).lte(10).describe("Feedback value, an integer between -10 and 10."),
  "weight": z.number().gte(0).lte(1).describe("Weight of the feedback, a float between 0 and 1. Default is 1.0.").optional(),
  "metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `metadata` to the tool, first call the tool `expandSchema` with \"/properties/metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Additional metadata for the feedback.</property-description>").optional()
}