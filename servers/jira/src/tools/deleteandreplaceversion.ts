import { z } from "zod"

export const toolName = `deleteandreplaceversion`
export const toolDescription = `Delete and replace version`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/version/{id}/removeAndSwap`
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
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "customFieldReplacementList",
    "moveAffectedIssuesTo",
    "moveFixIssuesTo"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().describe("The ID of the version."), "customFieldReplacementList": z.array(z.object({ "customFieldId": z.number().int().describe("The ID of the custom field in which to replace the version number.").optional(), "moveTo": z.number().int().describe("The version number to use as a replacement for the deleted version.").optional() }).strict().describe("Details about the replacement for a deleted version.")).describe("An array of custom field IDs (`customFieldId`) and version IDs (`moveTo`) to update when the fields contain the deleted version.").optional(), "moveAffectedIssuesTo": z.number().int().describe("The ID of the version to update `affectedVersion` to when the field contains the deleted version.").optional(), "moveFixIssuesTo": z.number().int().describe("The ID of the version to update `fixVersion` to when the field contains the deleted version.").optional() }).shape