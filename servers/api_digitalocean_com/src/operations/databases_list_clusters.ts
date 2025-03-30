import { z } from "zod"

export const toolName = `databases_list_clusters`
export const toolDescription = `List All Database Clusters`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases`
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

export const inputParams = z.object({ "query": z.object({ "tag_name": z.string().describe("Limits the results to database clusters with a specific tag.").optional() }).optional() }).shape