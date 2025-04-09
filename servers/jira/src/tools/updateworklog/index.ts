export { inputParams } from "./schema/root.js"

export const toolName = `updateworklog`
export const toolDescription = `Update worklog`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/{issueIdOrKey}/worklog/{id}`
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
  "query": [
    "notifyUsers",
    "adjustEstimate",
    "newEstimate",
    "expand",
    "overrideEditableFlag"
  ],
  "header": [],
  "path": [
    "issueIdOrKey",
    "id"
  ],
  "cookie": [],
  "body": [
    "author",
    "comment",
    "created",
    "b_id",
    "issueId",
    "properties",
    "self",
    "started",
    "timeSpent",
    "timeSpentSeconds",
    "updateAuthor",
    "updated",
    "visibility"
  ]
}
export const flatMap = {
  "b_id": "id"
}