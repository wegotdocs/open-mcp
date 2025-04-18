import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("The client ID of the GitHub app."),
  "access_token": z.string().describe("The access token used to authenticate to the GitHub API."),
  "target": z.string().describe("The name of the user or organization to scope the user access token to. **Required** unless `target_id` is specified.").optional(),
  "target_id": z.number().int().describe("The ID of the user or organization to scope the user access token to. **Required** unless `target` is specified.").optional(),
  "repositories": z.array(z.string()).describe("The list of repository names to scope the user access token to. `repositories` may not be specified if `repository_ids` is specified.").optional(),
  "repository_ids": z.array(z.number().int()).describe("The list of repository IDs to scope the user access token to. `repository_ids` may not be specified if `repositories` is specified.").optional(),
  "permissions": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `permissions` to the tool, first call the tool `expandSchema` with \"/properties/permissions\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The permissions granted to the user access token.</property-description>").optional()
}