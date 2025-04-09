export { inputParams } from "./schema/root.js"

export const toolName = `updateworkflowscheme`
export const toolDescription = `Classic update workflow scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflowscheme/{id}`
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
    "defaultWorkflow",
    "description",
    "draft",
    "b_id",
    "issueTypeMappings",
    "issueTypes",
    "lastModified",
    "lastModifiedUser",
    "name",
    "originalDefaultWorkflow",
    "originalIssueTypeMappings",
    "self",
    "updateDraftIfNeeded"
  ]
}
export const flatMap = {
  "b_id": "id"
}