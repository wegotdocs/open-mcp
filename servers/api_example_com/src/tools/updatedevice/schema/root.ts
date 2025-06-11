import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "displayName": z.string().describe("Display name (User assigned)").optional(),
  "userData": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `userData` to the tool, first call the tool `expandSchema` with \"/properties/userData\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Custom attributes</property-description>").optional(),
  "nodeRoleId": z.number().int().describe("Node Role identifier").optional(),
  "policyId": z.number().int().describe("Assigned policy ID (overrides organization policy mapping, or reverts to organization policy if Null)").optional(),
  "organizationId": z.number().int().describe("Organization identifier").optional(),
  "locationId": z.number().int().describe("Location identifier").optional(),
  "warranty": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `warranty` to the tool, first call the tool `expandSchema` with \"/properties/warranty\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Warranty Info</property-description>").optional()
}