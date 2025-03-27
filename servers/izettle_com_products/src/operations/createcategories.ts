import { z } from "zod"

export const toolName = `createcategories`
export const toolDescription = `Create a new category`
export const baseUrl = `https://products.izettle.com`
export const path = `/organizations/{organizationUuid}/categories/v2`
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

export const inputParams = z.object({ "path": z.object({ "organizationUuid": z.string().uuid() }).optional(), "body": z.object({ "categories": z.array(z.object({ "name": z.string().min(0).max(100), "uuid": z.string().uuid() })) }).optional() }).shape