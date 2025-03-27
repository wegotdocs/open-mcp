import { z } from "zod"

export const toolName = `getrules`
export const toolDescription = `Rules lookup`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/tweets/search/stream/rules`
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

export const inputParams = z.object({ "query": z.object({ "ids": z.array(z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("Unique identifier of this rule.")).describe("A comma-separated list of Rule IDs.").optional(), "max_results": z.number().int().gte(1).lte(1000).describe("The maximum number of results."), "pagination_token": z.string().min(16).max(16).describe("This value is populated by passing the 'next_token' returned in a request to paginate through results.").optional() }).optional() }).shape