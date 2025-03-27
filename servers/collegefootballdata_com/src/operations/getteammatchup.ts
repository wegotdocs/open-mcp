import { z } from "zod"

export const toolName = `getteammatchup`
export const toolDescription = `Team matchup history`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/teams/matchup`
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

export const inputParams = z.object({ "query": z.object({ "team1": z.string().describe("First team"), "team2": z.string().describe("Second team"), "minYear": z.number().int().gte(1869).describe("Minimum year").optional(), "maxYear": z.number().int().gte(1869).describe("Maximum year").optional() }).optional() }).shape