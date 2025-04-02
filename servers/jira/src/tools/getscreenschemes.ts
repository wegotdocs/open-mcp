import { z } from "zod"

export const toolName = `getscreenschemes`
export const toolDescription = `Get screen schemes`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/screenscheme`
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
    "expand",
    "queryString",
    "orderBy"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "maxResults": z.number().int().describe("The maximum number of items to return per page."), "id": z.array(z.number().int()).describe("The list of screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.").optional(), "expand": z.string().describe("Use [expand](#expansion) include additional information in the response. This parameter accepts `issueTypeScreenSchemes` that, for each screen schemes, returns information about the issue type screen scheme the screen scheme is assigned to."), "queryString": z.string().describe("String used to perform a case-insensitive partial match with screen scheme name."), "orderBy": z.enum(["name","-name","+name","id","-id","+id"]).describe("[Order](#ordering) the results by a field:\n\n *  `id` Sorts by screen scheme ID.\n *  `name` Sorts by screen scheme name.").optional() }).shape