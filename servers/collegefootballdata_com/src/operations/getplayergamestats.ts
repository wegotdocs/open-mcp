import { z } from "zod"

export const toolName = `getplayergamestats`
export const toolDescription = `Player game stats`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/games/players`
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

export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2001).describe("Year/season filter for games"), "week": z.number().int().gte(1).lte(16).describe("Week filter").optional(), "seasonType": z.string().describe("Season type filter (regular or postseason)"), "team": z.string().describe("Team filter").optional(), "conference": z.string().describe("Conference abbreviation filter").optional(), "category": z.string().describe("Category filter (e.g defensive)").optional(), "gameId": z.number().int().describe("Game id filter").optional() }).optional() }).shape