export { inputParams } from "./schema/root.js"

export const toolName = `getworkflowprojectissuetypeusages`
export const toolDescription = `Get issue types in a project that are using a given workflow`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflow/{workflowId}/project/{projectId}/issueTypeUsages`
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
    "nextPageToken",
    "maxResults"
  ],
  "header": [],
  "path": [
    "workflowId",
    "projectId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}