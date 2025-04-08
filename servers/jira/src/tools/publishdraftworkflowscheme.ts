import { z } from "zod"

export const toolName = `publishdraftworkflowscheme`
export const toolDescription = `Publish draft workflow scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflowscheme/{id}/draft/publish`
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
    "validateOnly"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "statusMappings"
  ]
}
export const flatMap = {}

export const inputParams = {
  "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to."),
  "validateOnly": z.boolean().describe("Whether the request only performs a validation.").optional(),
  "statusMappings": z.array(z.object({ "issueTypeId": z.string().describe("The ID of the issue type."), "newStatusId": z.string().describe("The ID of the new status."), "statusId": z.string().describe("The ID of the status.") }).strict().describe("Details about the mapping from a status to a new status for an issue type.")).describe("Mappings of statuses to new statuses for issue types.").optional()
}