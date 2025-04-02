import { z } from "zod"

export const toolName = `snapshots_list`
export const toolDescription = `List All Snapshots`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/snapshots`
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
    "page",
    "resource_type"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page"), "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return."), "resource_type": z.enum(["droplet","volume"]).describe("Used to filter snapshots by a resource type.").optional() }).shape