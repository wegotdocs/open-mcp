import { z } from "zod"

export const toolName = `getteamppa`
export const toolDescription = `Predicted Points Added (PPA/EPA) data by team`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/ppa/teams`
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

export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2001).describe("Year filter (required if team not specified)").optional(), "team": z.string().describe("Team filter (required if year not specified)").optional(), "conference": z.string().describe("Conference filter").optional(), "excludeGarbageTime": z.boolean().describe("Filter to remove garbage time plays from calculations").optional() }).optional() }).shape