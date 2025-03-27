import { z } from "zod"

export const toolName = `getplayerseasonstats`
export const toolDescription = `Player stats by season`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/stats/player/season`
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

export const inputParams = z.object({ "query": z.object({ "year": z.number().int().describe("Year filter"), "team": z.string().describe("Team filter").optional(), "conference": z.string().describe("Conference abbreviation filter").optional(), "startWeek": z.number().int().describe("Start week filter").optional(), "endWeek": z.number().int().describe("Start week filter").optional(), "seasonType": z.string().describe("Season type filter (regular, postseason, or both)").optional(), "category": z.string().describe("Stat category filter (e.g. passing)").optional() }).optional() }).shape