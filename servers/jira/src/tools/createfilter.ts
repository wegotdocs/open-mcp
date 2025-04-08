import { z } from "zod"

export const toolName = `createfilter`
export const toolDescription = `Create filter`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/filter`
export const method = `post`
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
    "expand",
    "overrideSharePermissions"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "approximateLastUsed",
    "description",
    "editPermissions",
    "favourite",
    "favouritedCount",
    "id",
    "jql",
    "name",
    "owner",
    "searchUrl",
    "self",
    "sharePermissions",
    "sharedUsers",
    "subscriptions",
    "viewUrl"
  ]
}
export const flatMap = {}

export const inputParams = {
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.\n *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.").optional(),
  "overrideSharePermissions": z.boolean().describe("EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be created. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).").optional(),
  "approximateLastUsed": z.string().datetime({ offset: true }).describe("\\[Experimental\\] Approximate last used time. Returns the date and time when the filter was last used. Returns `null` if the filter hasn't been used after tracking was enabled. For performance reasons, timestamps aren't updated in real time and therefore may not be exactly accurate.").readonly().optional(),
  "description": z.string().describe("A description of the filter.").optional(),
  "editPermissions": z.array(z.object({ "group": z.string().optional(), "id": z.number().int().describe("The unique identifier of the share permission.").readonly().optional(), "project": z.string().optional(), "role": z.string().optional(), "type": z.enum(["user","group","project","projectRole","global","loggedin","authenticated","project-unknown"]).describe("The type of share permission:\n\n *  `user` Shared with a user.\n *  `group` Shared with a group. If set in a request, then specify `sharePermission.group` as well.\n *  `project` Shared with a project. If set in a request, then specify `sharePermission.project` as well.\n *  `projectRole` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with `projectId` and `projectRoleId`.\n *  `global` Shared globally. If set in a request, no other `sharePermission` properties need to be specified.\n *  `loggedin` Shared with all logged-in users. Note: This value is set in a request by specifying `authenticated` as the `type`.\n *  `project-unknown` Shared with a project that the user does not have access to. Cannot be set in a request."), "user": z.string().optional() }).strict().describe("Details of a share permission for the filter.")).describe("The groups and projects that can edit the filter.").optional(),
  "favourite": z.boolean().describe("Whether the filter is selected as a favorite.").optional(),
  "favouritedCount": z.number().int().describe("The count of how many users have selected this filter as a favorite, including the filter owner.").readonly().optional(),
  "id": z.string().describe("The unique identifier for the filter.").readonly().optional(),
  "jql": z.string().describe("The JQL query for the filter. For example, *project = SSP AND issuetype = Bug*.").optional(),
  "name": z.string().describe("The name of the filter. Must be unique."),
  "owner": z.string().optional(),
  "searchUrl": z.string().url().describe("A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-3-filter-search-get) operation with the filter's JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/3/search?jql=project+%3D+SSP+AND+issuetype+%3D+Bug*.").readonly().optional(),
  "self": z.string().url().describe("The URL of the filter.").readonly().optional(),
  "sharePermissions": z.array(z.object({ "group": z.string().optional(), "id": z.number().int().describe("The unique identifier of the share permission.").readonly().optional(), "project": z.string().optional(), "role": z.string().optional(), "type": z.enum(["user","group","project","projectRole","global","loggedin","authenticated","project-unknown"]).describe("The type of share permission:\n\n *  `user` Shared with a user.\n *  `group` Shared with a group. If set in a request, then specify `sharePermission.group` as well.\n *  `project` Shared with a project. If set in a request, then specify `sharePermission.project` as well.\n *  `projectRole` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with `projectId` and `projectRoleId`.\n *  `global` Shared globally. If set in a request, no other `sharePermission` properties need to be specified.\n *  `loggedin` Shared with all logged-in users. Note: This value is set in a request by specifying `authenticated` as the `type`.\n *  `project-unknown` Shared with a project that the user does not have access to. Cannot be set in a request."), "user": z.string().optional() }).strict().describe("Details of a share permission for the filter.")).describe("The groups and projects that the filter is shared with.").optional(),
  "sharedUsers": z.string().optional(),
  "subscriptions": z.string().optional(),
  "viewUrl": z.string().url().describe("A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter=10100*.").readonly().optional()
}