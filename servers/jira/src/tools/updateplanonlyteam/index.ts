export { inputParams } from "./schema/root.js"

export const toolName = `updateplanonlyteam`
export const toolDescription = `Update plan-only team`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/plans/plan/{planId}/team/planonly/{planOnlyTeamId}`
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
    "planId",
    "planOnlyTeamId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}