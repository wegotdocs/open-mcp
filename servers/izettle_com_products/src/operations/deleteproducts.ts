import { z } from "zod"

export const toolName = `deleteproducts`
export const toolDescription = `Delete a list of products`
export const baseUrl = `https://products.izettle.com`
export const path = `/organizations/{organizationUuid}/products`
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

export const inputParams = z.object({ "path": z.object({ "organizationUuid": z.string().uuid() }).optional(), "query": z.object({ "uuid": z.array(z.string().uuid()).describe("List of product UUIDs to be deleted") }).optional() }).shape