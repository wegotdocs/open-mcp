export { inputParams } from "./schema/root.js"

export const toolName = `addissuetypestocontext`
export const toolDescription = `Add issue types to context`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/field/{fieldId}/context/{contextId}/issuetype`
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
    "fieldId",
    "contextId"
  ],
  "cookie": [],
  "body": [
    "issueTypeIds"
  ]
}
export const flatMap = {}