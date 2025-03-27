import { z } from "zod"

export const toolName = `getplugins`
export const toolDescription = `List plugins`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/plugins`
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

export const inputParams = z.object({ "query": z.object({ "pluginType": z.number().int().optional(), "uninstalled": z.boolean().optional(), "start": z.number().int().gte(0).describe("Offset used to paginate results").optional(), "count": z.number().int().gte(1).lte(100).describe("Number of items to return"), "sort": z.string().describe("Sort column").optional() }).optional() }).shape