export { inputParams } from "./schema/root.js"

export const toolName = `searchandreconsileissuesusingjql`
export const toolDescription = `Search for issues using JQL enhanced search (GET)`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/search/jql`
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
    "jql",
    "nextPageToken",
    "maxResults",
    "fields",
    "expand",
    "properties",
    "fieldsByKeys",
    "failFast",
    "reconcileIssues"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}