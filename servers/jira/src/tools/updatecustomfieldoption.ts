import { z } from "zod"

export const toolName = `updatecustomfieldoption`
export const toolDescription = `Update custom field options (context)`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/field/{fieldId}/context/{contextId}/option`
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
    "fieldId",
    "contextId"
  ],
  "cookie": [],
  "body": [
    "options"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "fieldId": z.string().describe("The ID of the custom field."), "contextId": z.number().int().describe("The ID of the context."), "options": z.array(z.object({ "disabled": z.boolean().describe("Whether the option is disabled.").optional(), "id": z.string().describe("The ID of the custom field option."), "value": z.string().describe("The value of the custom field option.").optional() }).strict().describe("Details of a custom field option for a context.")).describe("Details of the options to update.").optional() }).shape