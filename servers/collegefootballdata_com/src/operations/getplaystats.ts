import { z } from "zod"

export const toolName = `getplaystats`
export const toolDescription = `Play stats by play`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/play/stats`
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

export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2013).describe("Year filter").optional(), "week": z.number().int().gte(1).lte(16).describe("Week filter").optional(), "team": z.string().describe("Team filter").optional(), "gameId": z.number().int().describe("gameId filter (from /games endpoint)").optional(), "athleteId": z.number().int().describe("athleteId filter (from /roster endpoint)").optional(), "statTypeId": z.number().int().describe("statTypeId filter (from /play/stat/types endpoint)").optional(), "seasonType": z.string().describe("regular, postseason, or both").optional(), "conference": z.string().describe("conference abbreviation filter").optional() }).optional() }).shape