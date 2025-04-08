import { z } from "zod"

export const toolName = `reservedipv6_list`
export const toolDescription = `[Public Preview] List All Reserved IPv6s`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/reserved_ipv6`
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
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}