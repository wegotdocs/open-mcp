import { z } from "zod"

export const toolName = `getreturningproduction`
export const toolDescription = `Team returning production metrics`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/player/returning`
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

export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2014).describe("Year filter").optional(), "team": z.string().describe("Team filter").optional(), "conference": z.string().describe("Conference abbreviation filter").optional() }).optional() }).shape