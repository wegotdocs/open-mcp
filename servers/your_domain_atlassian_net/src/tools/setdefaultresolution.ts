import { z } from "zod"

export const toolName = `setdefaultresolution`
export const toolDescription = `Set default resolution`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/resolution/default`
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

export const inputParams = z.object({ "b_id": z.string().describe("The ID of the new default issue resolution. Must be an existing ID or null. Setting this to null erases the default resolution setting.") }).shape