import { z } from "zod"

export const toolName = `getplayerusage`
export const toolDescription = `Player usage metrics broken down by season`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/player/usage`
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

export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2013).describe("Year filter"), "team": z.string().describe("Team filter").optional(), "conference": z.string().describe("Conference abbreviation filter").optional(), "position": z.string().describe("Position abbreviation filter").optional(), "playerId": z.number().int().describe("Player id filter").optional(), "excludeGarbageTime": z.boolean().describe("Filter to remove garbage time plays from calculations").optional() }).optional() }).shape