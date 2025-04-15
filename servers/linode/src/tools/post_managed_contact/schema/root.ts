import { z } from "zod"

export const inputParams = {
  "email": z.string().email().describe("The address to email this Contact to alert them of issues.").optional(),
  "group": z.string().min(2).max(50).nullable().describe("__Filterable__ A grouping for this Contact. This is for display purposes only.").optional(),
  "id": z.number().int().describe("__Read-only__ This Contact's unique ID.").readonly().optional(),
  "name": z.string().regex(new RegExp("[a-zA-Z0-9-_ ]{2,64}")).min(2).max(64).describe("The name of this Contact.").optional(),
  "phone": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `phone` to the tool, first call the tool `expandSchema` with \"/properties/phone\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Information about how to reach this Contact by phone.</property-description>").optional(),
  "updated": z.string().datetime({ offset: true }).describe("__Read-only__ When this Contact was last updated.").readonly().optional()
}