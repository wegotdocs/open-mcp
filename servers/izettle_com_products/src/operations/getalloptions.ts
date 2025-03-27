import { z } from "zod"

export const toolName = `getalloptions`
export const toolDescription = `Retrieve an aggregate of active Options in the library`
export const baseUrl = `https://products.izettle.com`
export const path = `/organizations/{organizationUuid}/products/options`
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