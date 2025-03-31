import { z } from "zod"

export const toolName = `getallusersdefault`
export const toolDescription = `Get all users default`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/users`
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

export const inputParams = z.object({ "q_startAt": z.number().int().describe("The index of the first item to return."), "q_maxResults": z.number().int().describe("The maximum number of items to return.") }).shape