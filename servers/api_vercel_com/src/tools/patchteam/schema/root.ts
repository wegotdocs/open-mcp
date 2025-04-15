import { z } from "zod"

export const inputParams = {
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of."),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "avatar": z.string().describe("The hash value of an uploaded image.").optional(),
  "description": z.string().max(140).describe("A short text that describes the team.").optional(),
  "emailDomain": z.string().nullable().optional(),
  "name": z.string().max(256).describe("The name of the team.").optional(),
  "previewDeploymentSuffix": z.string().nullable().describe("Suffix that will be used for all preview deployments.").optional(),
  "regenerateInviteCode": z.boolean().describe("Create a new invite code and replace the current one.").optional(),
  "saml": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `saml` to the tool, first call the tool `expandSchema` with \"/properties/saml\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "b_slug": z.string().describe("A new slug for the team.").optional(),
  "enablePreviewFeedback": z.string().describe("Enable preview toolbar: one of on, off or default.").optional(),
  "enableProductionFeedback": z.string().describe("Enable production toolbar: one of on, off or default.").optional(),
  "sensitiveEnvironmentVariablePolicy": z.string().describe("Sensitive environment variable policy: one of on, off or default.").optional(),
  "remoteCaching": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `remoteCaching` to the tool, first call the tool `expandSchema` with \"/properties/remoteCaching\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Whether or not remote caching is enabled for the team</property-description>").optional(),
  "hideIpAddresses": z.boolean().describe("Display or hide IP addresses in Monitoring queries.").optional(),
  "hideIpAddressesInLogDrains": z.boolean().describe("Display or hide IP addresses in Log Drains.").optional()
}