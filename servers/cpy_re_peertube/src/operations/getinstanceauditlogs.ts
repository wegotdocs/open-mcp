import { z } from "zod"

export const toolName = `getinstanceauditlogs`
export const toolDescription = `Get instance audit logs`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/server/audit-logs`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({}).shape