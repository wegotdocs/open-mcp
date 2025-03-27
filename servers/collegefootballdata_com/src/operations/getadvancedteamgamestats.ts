import { z } from "zod"

export const toolName = `getadvancedteamgamestats`
export const toolDescription = `Advanced team metrics by game`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/stats/game/advanced`
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

export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2001).describe("Year filter (required if no team specified)").optional(), "week": z.number().int().gte(1).lte(16).describe("Week filter").optional(), "team": z.string().describe("Team filter (required if no year specified)").optional(), "opponent": z.string().describe("Opponent filter").optional(), "excludeGarbageTime": z.boolean().describe("Filter to remove garbage time plays from calculations").optional(), "seasonType": z.string().describe("Season type filter (regular, postseason, or both)").optional() }).optional() }).shape