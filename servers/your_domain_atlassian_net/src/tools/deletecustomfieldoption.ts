import { z } from "zod"

export const toolName = `deletecustomfieldoption`
export const toolDescription = `Delete custom field options (context)`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/field/{fieldId}/context/{contextId}/option/{optionId}`
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

export const inputParams = z.object({ "p_fieldId": z.string().describe("The ID of the custom field."), "p_contextId": z.number().int().describe("The ID of the context from which an option should be deleted."), "p_optionId": z.number().int().describe("The ID of the option to delete.") }).shape