import { z } from "zod"

export const toolName = `createcustomfieldoption`
export const toolDescription = `Create custom field options (context)`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/field/{fieldId}/context/{contextId}/option`
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
    "fieldId",
    "contextId"
  ],
  "cookie": [],
  "body": [
    "options"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "fieldId": z.string().describe("The ID of the custom field."), "contextId": z.number().int().describe("The ID of the context."), "options": z.array(z.object({ "disabled": z.boolean().describe("Whether the option is disabled.").optional(), "optionId": z.string().describe("For cascading options, the ID of a parent option.").optional(), "value": z.string().describe("The value of the custom field option.") }).strict().describe("Details of a custom field option to create.")).describe("Details of options to create.").optional() }).shape