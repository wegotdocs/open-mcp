import { z } from "zod"

export const toolName = `getfilterspaginated`
export const toolDescription = `Search for filters`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/filter/search`
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
    "filterName",
    "accountId",
    "owner",
    "groupname",
    "groupId",
    "projectId",
    "id",
    "orderBy",
    "startAt",
    "maxResults",
    "expand",
    "overrideSharePermissions",
    "isSubstringMatch"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "filterName": z.string().describe("String used to perform a case-insensitive partial match with `name`.").optional(),
  "accountId": z.string().min(0).max(128).describe("User account ID used to return filters with the matching `owner.accountId`. This parameter cannot be used with `owner`.").optional(),
  "owner": z.string().describe("This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return filters with the matching `owner.name`. This parameter cannot be used with `accountId`.").optional(),
  "groupname": z.string().describe("As a group's name can change, use of `groupId` is recommended to identify a group. Group name used to returns filters that are shared with a group that matches `sharePermissions.group.groupname`. This parameter cannot be used with the `groupId` parameter.").optional(),
  "groupId": z.string().describe("Group ID used to returns filters that are shared with a group that matches `sharePermissions.group.groupId`. This parameter cannot be used with the `groupname` parameter.").optional(),
  "projectId": z.number().int().describe("Project ID used to returns filters that are shared with a project that matches `sharePermissions.project.id`.").optional(),
  "id": z.array(z.number().int()).describe("The list of filter IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. Do not exceed 200 filter IDs.").optional(),
  "orderBy": z.enum(["description","-description","+description","favourite_count","-favourite_count","+favourite_count","id","-id","+id","is_favourite","-is_favourite","+is_favourite","name","-name","+name","owner","-owner","+owner","is_shared","-is_shared","+is_shared"]).describe("[Order](#ordering) the results by a field:\n\n *  `description` Sorts by filter description. Note that this sorting works independently of whether the expand to display the description field is in use.\n *  `favourite_count` Sorts by the count of how many users have this filter as a favorite.\n *  `is_favourite` Sorts by whether the filter is marked as a favorite.\n *  `id` Sorts by filter ID.\n *  `name` Sorts by filter name.\n *  `owner` Sorts by the ID of the filter owner.\n *  `is_shared` Sorts by whether the filter is shared.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `description` Returns the description of the filter.\n *  `favourite` Returns an indicator of whether the user has set the filter as a favorite.\n *  `favouritedCount` Returns a count of how many users have set this filter as a favorite.\n *  `jql` Returns the JQL query that the filter uses.\n *  `owner` Returns the owner of the filter.\n *  `searchUrl` Returns a URL to perform the filter's JQL query.\n *  `sharePermissions` Returns the share permissions defined for the filter.\n *  `editPermissions` Returns the edit permissions defined for the filter.\n *  `isWritable` Returns whether the current user has permission to edit the filter.\n *  `approximateLastUsed` \\[Experimental\\] Returns the approximate date and time when the filter was last evaluated.\n *  `subscriptions` Returns the users that are subscribed to the filter.\n *  `viewUrl` Returns a URL to view the filter.").optional(),
  "overrideSharePermissions": z.boolean().describe("EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be returned. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).").optional(),
  "isSubstringMatch": z.boolean().describe("When `true` this will perform a case-insensitive substring match for the provided `filterName`. When `false` the filter name will be searched using [full text search syntax](https://support.atlassian.com/jira-software-cloud/docs/search-for-issues-using-the-text-field/).").optional()
}