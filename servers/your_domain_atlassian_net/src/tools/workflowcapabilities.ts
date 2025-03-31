import { z } from "zod"

export const toolName = `workflowcapabilities`
export const toolDescription = `Get available workflow capabilities`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflows/capabilities`
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

export const inputParams = z.object({ "q_workflowId": z.string().optional(), "q_projectId": z.string().optional(), "q_issueTypeId": z.string().optional() }).shape