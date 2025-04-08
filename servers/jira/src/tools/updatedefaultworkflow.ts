import { z } from "zod"

export const toolName = `updatedefaultworkflow`
export const toolDescription = `Update default workflow`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflowscheme/{id}/default`
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
    "updateDraftIfNeeded",
    "workflow"
  ]
}
export const flatMap = {}

export const inputParams = {
  "id": z.number().int().describe("The ID of the workflow scheme."),
  "updateDraftIfNeeded": z.boolean().describe("Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to `false`.").optional(),
  "workflow": z.string().describe("The name of the workflow to set as the default workflow.")
}