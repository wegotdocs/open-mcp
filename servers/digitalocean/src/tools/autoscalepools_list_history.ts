import { z } from "zod"

export const toolName = `autoscalepools_list_history`
export const toolDescription = `List history events`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/droplets/autoscale/{autoscale_pool_id}/history`
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
export const keys = {
  "query": [
    "per_page",
    "page"
  ],
  "header": [],
  "path": [
    "autoscale_pool_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}