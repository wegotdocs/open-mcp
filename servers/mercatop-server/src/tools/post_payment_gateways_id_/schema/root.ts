import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for the resource."),
  "title": z.string().describe("Payment gateway title on checkout.").optional(),
  "description": z.string().describe("Payment gateway description on checkout.").optional(),
  "order": z.number().int().describe("Payment gateway sort order.").optional(),
  "enabled": z.boolean().describe("Payment gateway enabled status.").optional(),
  "settings": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `settings` to the tool, first call the tool `expandSchema` with \"/properties/settings\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Payment gateway settings.</property-description>").optional()
}