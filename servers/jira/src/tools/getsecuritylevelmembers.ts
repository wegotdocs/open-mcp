import { z } from "zod"

export const toolName = `getsecuritylevelmembers`
export const toolDescription = `Get issue security level members`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuesecurityschemes/level/member`
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
    "startAt",
    "maxResults",
    "id",
    "schemeId",
    "levelId",
    "expand"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "startAt": z.string().describe("The index of the first item to return in a page of results (page offset)."), "maxResults": z.string().describe("The maximum number of items to return per page."), "id": z.array(z.string()).describe("The list of issue security level member IDs. To include multiple issue security level members separate IDs with an ampersand: `id=10000&id=10001`.").optional(), "schemeId": z.array(z.string()).describe("The list of issue security scheme IDs. To include multiple issue security schemes separate IDs with an ampersand: `schemeId=10000&schemeId=10001`.").optional(), "levelId": z.array(z.string()).describe("The list of issue security level IDs. To include multiple issue security levels separate IDs with an ampersand: `levelId=10000&levelId=10001`.").optional(), "expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `all` Returns all expandable information\n *  `field` Returns information about the custom field granted the permission\n *  `group` Returns information about the group that is granted the permission\n *  `projectRole` Returns information about the project role granted the permission\n *  `user` Returns information about the user who is granted the permission").optional() }).shape