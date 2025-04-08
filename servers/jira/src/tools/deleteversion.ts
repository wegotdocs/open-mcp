import { z } from "zod"

export const toolName = `deleteversion`
export const toolDescription = `Delete version`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/version/{id}`
export const method = `delete`
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
    "moveFixIssuesTo",
    "moveAffectedIssuesTo"
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
  "id": z.string().describe("The ID of the version."),
  "moveFixIssuesTo": z.string().describe("The ID of the version to update `fixVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.").optional(),
  "moveAffectedIssuesTo": z.string().describe("The ID of the version to update `affectedVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.").optional()
}