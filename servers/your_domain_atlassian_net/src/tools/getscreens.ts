import { z } from "zod"

export const toolName = `getscreens`
export const toolDescription = `Get screens`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/screens`
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

export const inputParams = z.object({ "q_startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "q_maxResults": z.number().int().describe("The maximum number of items to return per page."), "q_id": z.array(z.number().int()).describe("The list of screen IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.").optional(), "q_queryString": z.string().describe("String used to perform a case-insensitive partial match with screen name."), "q_scope": z.array(z.enum(["GLOBAL","TEMPLATE","PROJECT"])).describe("The scope filter string. To filter by multiple scope, provide an ampersand-separated list. For example, `scope=GLOBAL&scope=PROJECT`.").optional(), "q_orderBy": z.enum(["name","-name","+name","id","-id","+id"]).describe("[Order](#ordering) the results by a field:\n\n *  `id` Sorts by screen ID.\n *  `name` Sorts by screen name.").optional() }).shape