import { z } from "zod"

export const toolName = `deletestatusesbyid`
export const toolDescription = `Bulk delete Statuses`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/statuses`
export const method = `delete`
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
    "id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "id": z.array(z.string()).describe("The list of status IDs. To include multiple IDs, provide an ampersand-separated list. For example, id=10000&id=10001.\n\nMin items `1`, Max items `50`")
}