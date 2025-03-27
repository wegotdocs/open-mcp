import { z } from "zod"

export const toolName = `getspratings`
export const toolDescription = `Historical SP+ ratings`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/ratings/sp`
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

export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(1970).describe("Season filter (required if team not specified)").optional(), "team": z.string().describe("Team filter (required if year not specified)").optional() }).optional() }).shape