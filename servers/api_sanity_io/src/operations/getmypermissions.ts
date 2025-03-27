import { z } from "zod"

export const toolName = `getmypermissions`
export const toolDescription = `Get current user permissions.`
export const baseUrl = `https://api.sanity.io`
export const path = `/vX/access/permissions/me`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "query": z.object({ "nextCursor": z.string().describe("The cursor for pagination. Use the nextCursor from the previous response to get the next page.").optional(), "limit": z.number().int().gte(1).lte(500).describe("The number of items to return per page.") }).optional() }).shape