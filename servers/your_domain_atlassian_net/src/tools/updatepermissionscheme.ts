import { z } from "zod"

export const toolName = `updatepermissionscheme`
export const toolDescription = `Update permission scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/permissionscheme/{schemeId}`
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

export const inputParams = z.object({ "p_schemeId": z.number().int().describe("The ID of the permission scheme to update."), "q_expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:\n\n *  `all` Returns all expandable information.\n *  `field` Returns information about the custom field granted the permission.\n *  `group` Returns information about the group that is granted the permission.\n *  `permissions` Returns all permission grants for each permission scheme.\n *  `projectRole` Returns information about the project role granted the permission.\n *  `user` Returns information about the user who is granted the permission.").optional(), "b_description": z.string().describe("A description for the permission scheme.").optional(), "b_expand": z.string().describe("The expand options available for the permission scheme.").readonly().optional(), "b_id": z.number().int().describe("The ID of the permission scheme.").readonly().optional(), "b_name": z.string().describe("The name of the permission scheme. Must be unique."), "b_permissions": z.array(z.object({ "holder": z.string().optional(), "id": z.number().int().describe("The ID of the permission granted details.").readonly().optional(), "permission": z.string().describe("The permission to grant. This permission can be one of the built-in permissions or a custom permission added by an app. See [Built-in permissions](../api-group-permission-schemes/#built-in-permissions) in *Get all permission schemes* for more information about the built-in permissions. See the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation for more information about custom permissions.").optional(), "self": z.string().url().describe("The URL of the permission granted details.").readonly().optional() }).catchall(z.any()).describe("Details about a permission granted to a user or group.")).describe("The permission scheme to create or update. See [About permission schemes and grants](../api-group-permission-schemes/#about-permission-schemes-and-grants) for more information.").optional(), "b_scope": z.string().optional(), "b_self": z.string().url().describe("The URL of the permission scheme.").readonly().optional() }).shape