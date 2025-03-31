import { z } from "zod"

export const toolName = `setissuetypeproperty`
export const toolDescription = `Set issue type property`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey}`
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

export const inputParams = z.object({ "p_issueTypeId": z.string().describe("The ID of the issue type."), "p_propertyKey": z.string().describe("The key of the issue type property. The maximum length is 255 characters.") }).shape