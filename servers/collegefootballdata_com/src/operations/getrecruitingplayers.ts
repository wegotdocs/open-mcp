import { z } from "zod"

export const toolName = `getrecruitingplayers`
export const toolDescription = `Player recruiting ratings and rankings`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/recruiting/players`
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

export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2000).describe("Recruiting class year (required if team no specified)").optional(), "classification": z.string().describe("Type of recruit (HighSchool, JUCO, PrepSchool)"), "position": z.string().describe("Position abbreviation filter").optional(), "state": z.string().describe("State or province abbreviation filter").optional(), "team": z.string().describe("Committed team filter (required if year not specified)").optional() }).optional() }).shape