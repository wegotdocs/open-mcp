import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.number().int().describe("Organization identifier"),
  "clientDocumentId": z.number().int().describe("Organization document identifier"),
  "documentName": z.string().describe("Document Name").optional(),
  "documentDescription": z.string().describe("Document Description").optional(),
  "fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `fields` to the tool, first call the tool `expandSchema` with \"/properties/fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Fields</property-description>").optional()
}