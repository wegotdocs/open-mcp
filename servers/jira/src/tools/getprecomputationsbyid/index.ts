export { inputParams } from "./schema/root.js"

export const toolName = `getprecomputationsbyid`
export const toolDescription = `Get precomputations by ID (apps)`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/jql/function/computation/search`
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
  "query": [
    "orderBy"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "precomputationIDs"
  ]
}
export const flatMap = {}