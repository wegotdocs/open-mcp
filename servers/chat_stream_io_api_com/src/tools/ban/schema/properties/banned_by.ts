import { z } from "zod"

export const inputParamsSchema = {
  "custom": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom` to the tool, first call the tool `expandSchema` with \"/properties/banned_by/properties/custom\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Custom user data</property-description>").optional(),
  "id": z.string().describe("User ID"),
  "image": z.string().describe("User's profile image URL").optional(),
  "invisible": z.boolean().optional(),
  "language": z.string().optional(),
  "name": z.string().describe("Optional name of user").optional(),
  "privacy_settings": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `privacy_settings` to the tool, first call the tool `expandSchema` with \"/properties/banned_by/properties/privacy_settings\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "role": z.string().describe("User's global role").optional(),
  "teams": z.array(z.string()).describe("List of teams the user belongs to").optional(),
  "teams_role": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `teams_role` to the tool, first call the tool `expandSchema` with \"/properties/banned_by/properties/teams_role\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Map of team-specific roles for the user</property-description>").optional()
}