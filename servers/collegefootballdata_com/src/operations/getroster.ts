import { z } from "zod"

export const toolName = `getroster`
export const toolDescription = `Team rosters`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/roster`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]

export const inputParams = z.object({ "query": z.object({ "team": z.string().describe("Team name").optional(), "year": z.number().int().gte(2009).describe("Season year").optional() }).optional() }).shape