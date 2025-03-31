import { z } from "zod"

export const toolName = `getbulkscreentabs`
export const toolDescription = `Get bulk screen tabs`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/screens/tabs`
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

export const inputParams = z.object({ "q_screenId": z.array(z.number().int()).describe("The list of screen IDs. To include multiple screen IDs, provide an ampersand-separated list. For example, `screenId=10000&screenId=10001`.").optional(), "q_tabId": z.array(z.number().int()).describe("The list of tab IDs. To include multiple tab IDs, provide an ampersand-separated list. For example, `tabId=10000&tabId=10001`.").optional(), "q_startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "q_maxResult": z.number().int().describe("The maximum number of items to return per page. The maximum number is 100,") }).shape