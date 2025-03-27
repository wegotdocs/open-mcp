import { z } from "zod"

export const toolName = `getlatestimportstatus`
export const toolDescription = `Get status for latest import`
export const baseUrl = `https://products.izettle.com`
export const path = `/organizations/{organizationUuid}/import/status`
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

export const inputParams = z.object({ "path": z.object({ "organizationUuid": z.string().uuid() }).optional() }).shape