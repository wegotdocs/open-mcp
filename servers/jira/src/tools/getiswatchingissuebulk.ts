import { z } from "zod"

export const toolName = `getiswatchingissuebulk`
export const toolDescription = `Get is watching issue bulk`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/watching`
export const method = `post`
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
    "issueIds"
  ]
}
export const flatMap = {}

export const inputParams = {
  "issueIds": z.array(z.string()).describe("The list of issue IDs.")
}