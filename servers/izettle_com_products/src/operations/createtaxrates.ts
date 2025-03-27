import { z } from "zod"

export const toolName = `createtaxrates`
export const toolDescription = `Create new tax rates`
export const baseUrl = `https://products.izettle.com`
export const path = `/v1/taxes`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "body": z.object({ "taxRates": z.array(z.object({ "default": z.boolean().optional(), "label": z.string().min(0).max(512), "percentage": z.number().lte(100).optional(), "uuid": z.string().uuid() })).min(0).max(15) }).optional() }).shape