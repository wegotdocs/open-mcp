import { z } from "zod"

export const inputParamsSchema = {
  "schemeId": z.number().int().describe("The ID of the permission scheme in which to create a new permission grant."),
  "expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:\n\n *  `permissions` Returns all permission grants for each permission scheme.\n *  `user` Returns information about the user who is granted the permission.\n *  `group` Returns information about the group that is granted the permission.\n *  `projectRole` Returns information about the project role granted the permission.\n *  `field` Returns information about the custom field granted the permission.\n *  `all` Returns all expandable information.").optional(),
  "holder": z.string().optional(),
  "id": z.number().int().describe("The ID of the permission granted details.").readonly().optional(),
  "permission": z.string().describe("The permission to grant. This permission can be one of the built-in permissions or a custom permission added by an app. See [Built-in permissions](../api-group-permission-schemes/#built-in-permissions) in *Get all permission schemes* for more information about the built-in permissions. See the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation for more information about custom permissions.").optional(),
  "self": z.string().url().describe("The URL of the permission granted details.").readonly().optional()
}