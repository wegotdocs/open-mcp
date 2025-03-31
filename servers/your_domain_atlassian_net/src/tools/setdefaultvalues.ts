import { z } from "zod"

export const toolName = `setdefaultvalues`
export const toolDescription = `Set custom field contexts default values`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/field/{fieldId}/context/defaultValue`
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

export const inputParams = z.object({ "p_fieldId": z.string().describe("The ID of the custom field."), "b_defaultValues": z.array(z.record(z.never()).and(z.object({ "cascadingOptionId": z.string().describe("The ID of the default cascading option.").optional(), "contextId": z.string().describe("The ID of the context."), "optionId": z.string().describe("The ID of the default option."), "type": z.string() }).describe("The default value for a cascading select custom field."))).optional() }).shape