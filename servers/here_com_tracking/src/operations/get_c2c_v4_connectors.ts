import { z } from "zod"

export const toolName = `get_c2c_v4_connectors`
export const toolDescription = `Gets a list of connectors`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/c2c/v4/connectors`
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

export const inputParams = z.object({ "query": z.object({ "pageToken": z.string().describe("A token from the previously returned response to retrieve the specified page.").optional(), "limit": z.number().int().gte(1).lte(100).describe("The number of items to return per page") }).optional() }).shape