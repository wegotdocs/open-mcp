import { z } from "zod"

export const toolName = `getgamemedia`
export const toolDescription = `Game media information and schedules`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/games/media`
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

export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2001).describe("Year filter"), "week": z.number().int().gte(1).lte(16).describe("Week filter").optional(), "seasonType": z.string().describe("Season type filter (regular, postseason, or both)").optional(), "team": z.string().describe("Team filter").optional(), "conference": z.string().describe("Conference filter").optional(), "mediaType": z.string().describe("Media type filter (tv, radio, web, ppv, or mobile)").optional(), "classification": z.string().describe("Division classification filter (fbs/fcs/ii/iii)").optional() }).optional() }).shape