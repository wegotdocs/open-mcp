import { z } from "zod"

export const toolName = `finduserkeysbyquery`
export const toolDescription = `Find user keys by query`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/user/search/query/key`
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

export const inputParams = z.object({ "q_query": z.string().describe("The search query."), "q_startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "q_maxResult": z.number().int().describe("The maximum number of items to return per page.") }).shape