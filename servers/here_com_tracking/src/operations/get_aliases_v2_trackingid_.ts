import { z } from "zod"

export const toolName = `get_aliases_v2_trackingid_`
export const toolDescription = `Gets all aliases of a device`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/aliases/v2/{trackingId}`
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

export const inputParams = z.object({ "query": z.object({ "pageToken": z.string().describe("A token from the previously returned response to retrieve the specified page.").optional(), "count": z.number().int().gte(1).lte(100).describe("The number of items to return per page."), "type": z.string().min(1).max(50).describe("An alias type").optional() }).optional() }).shape