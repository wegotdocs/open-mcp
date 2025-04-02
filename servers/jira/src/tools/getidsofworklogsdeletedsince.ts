import { z } from "zod"

export const toolName = `getidsofworklogsdeletedsince`
export const toolDescription = `Get IDs of deleted worklogs`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/worklog/deleted`
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
    "since"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "since": z.number().int().describe("The date and time, as a UNIX timestamp in milliseconds, after which deleted worklogs are returned.") }).shape