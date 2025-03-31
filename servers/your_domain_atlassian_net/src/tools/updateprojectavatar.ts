import { z } from "zod"

export const toolName = `updateprojectavatar`
export const toolDescription = `Set project avatar`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/project/{projectIdOrKey}/avatar`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "p_projectIdOrKey": z.string().describe("The ID or (case-sensitive) key of the project."), "b_fileName": z.string().describe("The file name of the avatar icon. Returned for system avatars.").readonly().optional(), "b_id": z.string().describe("The ID of the avatar."), "b_isDeletable": z.boolean().describe("Whether the avatar can be deleted.").readonly().optional(), "b_isSelected": z.boolean().describe("Whether the avatar is used in Jira. For example, shown as a project's avatar.").readonly().optional(), "b_isSystemAvatar": z.boolean().describe("Whether the avatar is a system avatar.").readonly().optional(), "b_owner": z.string().describe("The owner of the avatar. For a system avatar the owner is null (and nothing is returned). For non-system avatars this is the appropriate identifier, such as the ID for a project or the account ID for a user.").readonly().optional(), "b_urls": z.record(z.string().url().readonly()).describe("The list of avatar icon URLs.").readonly().optional() }).shape