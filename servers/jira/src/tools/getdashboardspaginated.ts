import { z } from "zod"

export const toolName = `getdashboardspaginated`
export const toolDescription = `Search for dashboards`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/dashboard/search`
export const method = `get`
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
export const keys = {
  "query": [
    "dashboardName",
    "accountId",
    "owner",
    "groupname",
    "groupId",
    "projectId",
    "orderBy",
    "startAt",
    "maxResults",
    "status",
    "expand"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "dashboardName": z.string().describe("String used to perform a case-insensitive partial match with `name`.").optional(), "accountId": z.string().max(128).describe("User account ID used to return dashboards with the matching `owner.accountId`. This parameter cannot be used with the `owner` parameter.").optional(), "owner": z.string().describe("This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return dashboards with the matching `owner.name`. This parameter cannot be used with the `accountId` parameter.").optional(), "groupname": z.string().describe("As a group's name can change, use of `groupId` is recommended. Group name used to return dashboards that are shared with a group that matches `sharePermissions.group.name`. This parameter cannot be used with the `groupId` parameter.").optional(), "groupId": z.string().describe("Group ID used to return dashboards that are shared with a group that matches `sharePermissions.group.groupId`. This parameter cannot be used with the `groupname` parameter.").optional(), "projectId": z.number().int().describe("Project ID used to returns dashboards that are shared with a project that matches `sharePermissions.project.id`.").optional(), "orderBy": z.enum(["description","-description","+description","favorite_count","-favorite_count","+favorite_count","id","-id","+id","is_favorite","-is_favorite","+is_favorite","name","-name","+name","owner","-owner","+owner"]).describe("[Order](#ordering) the results by a field:\n\n *  `description` Sorts by dashboard description. Note that this sort works independently of whether the expand to display the description field is in use.\n *  `favourite_count` Sorts by dashboard popularity.\n *  `id` Sorts by dashboard ID.\n *  `is_favourite` Sorts by whether the dashboard is marked as a favorite.\n *  `name` Sorts by dashboard name.\n *  `owner` Sorts by dashboard owner name."), "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "maxResults": z.number().int().describe("The maximum number of items to return per page."), "status": z.enum(["active","archived","deleted"]).describe("The status to filter by. It may be active, archived or deleted."), "expand": z.string().describe("Use [expand](#expansion) to include additional information about dashboard in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `description` Returns the description of the dashboard.\n *  `owner` Returns the owner of the dashboard.\n *  `viewUrl` Returns the URL that is used to view the dashboard.\n *  `favourite` Returns `isFavourite`, an indicator of whether the user has set the dashboard as a favorite.\n *  `favouritedCount` Returns `popularity`, a count of how many users have set this dashboard as a favorite.\n *  `sharePermissions` Returns details of the share permissions defined for the dashboard.\n *  `editPermissions` Returns details of the edit permissions defined for the dashboard.\n *  `isWritable` Returns whether the current user has permission to edit the dashboard.").optional() }).shape