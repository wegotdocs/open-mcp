import { z } from "zod"

export const inputParamsSchema = {
  "installation_id": z.number().int().describe("The unique identifier of the installation."),
  "repositories": z.array(z.string()).describe("List of repository names that the token should have access to").optional(),
  "repository_ids": z.array(z.number().int()).describe("List of repository IDs that the token should have access to").optional(),
  "permissions": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `permissions` to the tool, first call the tool `expandSchema` with \"/properties/permissions\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The permissions granted to the user access token.</property-description>").optional()
}