export { inputParams } from "./schema/root.js"

export const toolName = `updateuimodification`
export const toolDescription = `Update UI modification`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/uiModifications/{uiModificationId}`
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
  "path": [
    "uiModificationId"
  ],
  "cookie": [],
  "body": [
    "contexts",
    "data",
    "description",
    "name"
  ]
}
export const flatMap = {}