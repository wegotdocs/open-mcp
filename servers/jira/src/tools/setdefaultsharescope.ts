import { z } from "zod"

export const toolName = `setdefaultsharescope`
export const toolDescription = `Set default share scope`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/filter/defaultShareScope`
export const method = `put`
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
  "path": [],
  "cookie": [],
  "body": [
    "scope"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "scope": z.enum(["GLOBAL","AUTHENTICATED","PRIVATE"]).describe("The scope of the default sharing for new filters and dashboards:\n\n *  `AUTHENTICATED` Shared with all logged-in users.\n *  `GLOBAL` Shared with all logged-in users. This shows as `AUTHENTICATED` in the response.\n *  `PRIVATE` Not shared with any users.") }).shape