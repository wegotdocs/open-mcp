import { z } from "zod"

export const toolName = `getvalidprojectkey`
export const toolDescription = `Get valid project key`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/projectvalidate/validProjectKey`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({ "q_key": z.string().describe("The project key.").optional() }).shape