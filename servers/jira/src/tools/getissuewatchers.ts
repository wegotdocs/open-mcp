import { z } from "zod"

export const toolName = `getissuewatchers`
export const toolDescription = `Get issue watchers`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/{issueIdOrKey}/watchers`
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
  "query": [],
  "header": [],
  "path": [
    "issueIdOrKey"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue.")
}