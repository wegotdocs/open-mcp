import { z } from "zod"

export const toolName = `getbulkoperationprogress`
export const toolDescription = `Get bulk issue operation progress`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/bulk/queue/{taskId}`
export const method = `get`
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

export const inputParams = z.object({ "p_taskId": z.string().describe("The ID of the task.") }).shape