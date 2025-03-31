import { z } from "zod"

export const toolName = `createcustomfieldcontext`
export const toolDescription = `Create custom field context`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/field/{fieldId}/context`
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

export const inputParams = z.object({ "p_fieldId": z.string().describe("The ID of the custom field."), "b_description": z.string().describe("The description of the context.").optional(), "b_id": z.string().describe("The ID of the context.").readonly().optional(), "b_issueTypeIds": z.array(z.string()).describe("The list of issue types IDs for the context. If the list is empty, the context refers to all issue types.").optional(), "b_name": z.string().describe("The name of the context."), "b_projectIds": z.array(z.string()).describe("The list of project IDs associated with the context. If the list is empty, the context is global.").optional() }).shape