export { inputParams } from "./schema/root.js"

export const toolName = `bulksetissueproperty`
export const toolDescription = `Bulk set issue property`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/properties/{propertyKey}`
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
    "propertyKey"
  ],
  "cookie": [],
  "body": [
    "expression",
    "filter",
    "value"
  ]
}
export const flatMap = {}