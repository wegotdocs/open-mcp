import { z } from "zod"

export const toolName = `updatetaxrate`
export const toolDescription = `Update a single tax rate`
export const baseUrl = `https://products.izettle.com`
export const path = `/v1/taxes/{taxRateUuid}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "taxRateUuid": z.string().uuid() }).optional(), "body": z.object({ "default": z.boolean().optional(), "label": z.string().min(0).max(512).optional(), "percentage": z.number().lte(100).optional() }).optional() }).shape