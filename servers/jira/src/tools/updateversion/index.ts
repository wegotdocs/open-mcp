export { inputParams } from "./schema/root.js"

export const toolName = `updateversion`
export const toolDescription = `Update version`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/version/{id}`
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
    "id"
  ],
  "cookie": [],
  "body": [
    "approvers",
    "archived",
    "description",
    "driver",
    "expand",
    "b_id",
    "issuesStatusForFixVersion",
    "moveUnfixedIssuesTo",
    "name",
    "operations",
    "overdue",
    "project",
    "projectId",
    "releaseDate",
    "released",
    "self",
    "startDate",
    "userReleaseDate",
    "userStartDate"
  ]
}
export const flatMap = {
  "b_id": "id"
}