import { z } from "zod"

export const toolName = `getissuetypescreenschemes`
export const toolDescription = `Get issue type screen schemes`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuetypescreenscheme`
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
    "queryString",
    "orderBy",
    "expand"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "id": z.array(z.number().int()).describe("The list of issue type screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.").optional(),
  "queryString": z.string().describe("String used to perform a case-insensitive partial match with issue type screen scheme name.").optional(),
  "orderBy": z.enum(["name","-name","+name","id","-id","+id"]).describe("[Order](#ordering) the results by a field:\n\n *  `name` Sorts by issue type screen scheme name.\n *  `id` Sorts by issue type screen scheme ID.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts `projects` that, for each issue type screen schemes, returns information about the projects the issue type screen scheme is assigned to.").optional()
}