import { z } from "zod"

export const inputParamsSchema = {
  "templateOrganizationId": z.number().int().describe("Model/Template organization to copy settings from").optional(),
  "name": z.string().describe("Organization full name").optional(),
  "description": z.string().describe("Organization Description").optional(),
  "userData": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `userData` to the tool, first call the tool `expandSchema` with \"/properties/userData\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Custom attributes</property-description>").optional(),
  "nodeApprovalMode": z.enum(["AUTOMATIC","MANUAL","REJECT"]).describe("Device Approval Mode").optional(),
  "tags": z.array(z.string().describe("Tags")).describe("Tags").optional(),
  "fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `fields` to the tool, first call the tool `expandSchema` with \"/properties/fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Custom Fields</property-description>").optional(),
  "locations": z.array(z.object({ "name": z.string().describe("Location name").optional(), "address": z.string().describe("Address").optional(), "description": z.string().describe("Description").optional(), "userData": z.record(z.any()).describe("Custom attributes").optional(), "tags": z.array(z.string().describe("Tags")).describe("Tags").optional(), "fields": z.record(z.record(z.any()).describe("Custom Fields")).describe("Custom Fields").optional() })).describe("List of locations").optional(),
  "policies": z.array(z.object({ "nodeRoleId": z.number().int().describe("Node Role Identifier").optional(), "policyId": z.number().int().describe("Policy Identifier").optional() }).describe("Node role policy assignments")).describe("Node role policy assignments").optional()
}