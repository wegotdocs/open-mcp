export { inputParams } from "./schema/root.js"

export const toolName = `getdashboardspaginated`
export const toolDescription = `Search for dashboards`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/dashboard/search`
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
    "dashboardName",
    "accountId",
    "owner",
    "groupname",
    "groupId",
    "projectId",
    "orderBy",
    "startAt",
    "maxResults",
    "status",
    "expand"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}