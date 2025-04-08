import { z } from "zod"

export const toolName = `getstatus`
export const toolDescription = `Get status`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/status/{idOrName}`
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
    "idOrName"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "idOrName": z.string().describe("The ID or name of the status.")
}