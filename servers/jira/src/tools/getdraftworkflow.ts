import { z } from "zod"

export const toolName = `getdraftworkflow`
export const toolDescription = `Get issue types for workflows in draft workflow scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflowscheme/{id}/draft/workflow`
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
    "workflowName"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to."),
  "workflowName": z.string().describe("The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.").optional()
}