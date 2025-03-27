import { z } from "zod"

export const toolName = `playersearch`
export const toolDescription = `Search for player information`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/player/search`
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

export const inputParams = z.object({ "query": z.object({ "searchTerm": z.string().describe("Term to search on"), "position": z.string().describe("Position abbreviation filter").optional(), "team": z.string().describe("Team filter").optional(), "year": z.number().int().gte(2001).describe("Year filter").optional() }).optional() }).shape