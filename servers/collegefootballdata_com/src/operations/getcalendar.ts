import { z } from "zod"

export const toolName = `getcalendar`
export const toolDescription = `Season calendar`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/calendar`
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

export const inputParams = z.object({ "query": z.object({ "year": z.number().int().describe("Year filter") }).optional() }).shape