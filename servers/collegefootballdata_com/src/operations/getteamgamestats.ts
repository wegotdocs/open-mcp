import { z } from "zod"

export const toolName = `getteamgamestats`
export const toolDescription = `Team game stats`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/games/teams`
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

export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2001).describe("Year/season filter for games"), "week": z.number().int().gte(1).lte(16).describe("Week filter").optional(), "seasonType": z.string().describe("Season type filter (regular or postseason)"), "team": z.string().describe("Team filter").optional(), "conference": z.string().describe("Conference abbreviation filter").optional(), "gameId": z.number().int().describe("Game id filter").optional(), "classification": z.string().describe("Division classification filter (fbs/fcs/ii/iii)").optional() }).optional() }).shape