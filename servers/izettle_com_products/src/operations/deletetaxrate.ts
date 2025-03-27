import { z } from "zod"

export const toolName = `deletetaxrate`
export const toolDescription = `Delete a single tax rate`
export const baseUrl = `https://products.izettle.com`
export const path = `/v1/taxes/{taxRateUuid}`
export const method = `delete`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "taxRateUuid": z.string().uuid() }).optional() }).shape