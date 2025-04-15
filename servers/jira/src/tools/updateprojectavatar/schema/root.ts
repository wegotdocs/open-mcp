import { z } from "zod"

export const inputParamsSchema = {
  "projectIdOrKey": z.string().describe("The ID or (case-sensitive) key of the project."),
  "fileName": z.string().describe("The file name of the avatar icon. Returned for system avatars.").readonly().optional(),
  "id": z.string().describe("The ID of the avatar."),
  "isDeletable": z.boolean().describe("Whether the avatar can be deleted.").readonly().optional(),
  "isSelected": z.boolean().describe("Whether the avatar is used in Jira. For example, shown as a project's avatar.").readonly().optional(),
  "isSystemAvatar": z.boolean().describe("Whether the avatar is a system avatar.").readonly().optional(),
  "owner": z.string().describe("The owner of the avatar. For a system avatar the owner is null (and nothing is returned). For non-system avatars this is the appropriate identifier, such as the ID for a project or the account ID for a user.").readonly().optional(),
  "urls": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `urls` to the tool, first call the tool `expandSchema` with \"/properties/urls\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The list of avatar icon URLs.</property-description>").optional()
}