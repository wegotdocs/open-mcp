import { z } from "zod"

export const toolName = `listpips`
export const toolDescription = `Look inside pips entities`
export const baseUrl = `https://programmes.api.bbc.com`
export const path = `/pips`
export const method = `get`
export const security = [
  {
    "key": "api_key",
    "value": "<mcp-env-var>API_KEY</mcp-env-var>",
    "in": "query",
    "envVarName": "API_KEY",
    "schemeType": "apiKey",
    "schemeName": "api_key"
  }
]

export const inputParams = z.object({ "query": z.object({ "page": z.number().int().gte(1).describe("which page of results to return"), "page_size": z.number().int().lte(300).describe("number of results in each page"), "q": z.string().describe("filter for subset of programmes matching supplied keyword/phrase (boolean operators permitted)").optional() }).optional() }).shape