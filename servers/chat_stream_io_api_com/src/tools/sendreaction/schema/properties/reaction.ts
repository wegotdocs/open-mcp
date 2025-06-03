import { z } from "zod"

export const inputParamsSchema = {
  "created_at": z.string().datetime({ offset: true }).describe("Date/time of creation").optional(),
  "custom": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom` to the tool, first call the tool `expandSchema` with \"/properties/reaction/properties/custom\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "score": z.number().int().describe("Reaction score. If not specified reaction has score of 1").optional(),
  "type": z.string().max(30).describe("The type of reaction (e.g. 'like', 'laugh', 'wow')"),
  "updated_at": z.string().datetime({ offset: true }).describe("Date/time of the last update").optional(),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/reaction/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User request object</property-description>").optional(),
  "user_id": z.string().optional()
}