import { z } from "zod"

export const toolName = `bulkdeleteissueproperty`
export const toolDescription = `Bulk delete issue property`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/properties/{propertyKey}`
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

export const inputParams = z.object({ "p_propertyKey": z.string().describe("The key of the property."), "b_currentValue": z.any().describe("The value of properties to perform the bulk operation on.").optional(), "b_entityIds": z.array(z.number().int()).describe("List of issues to perform the bulk delete operation on.").optional() }).shape