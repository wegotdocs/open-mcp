import { z } from "zod"

export const toolName = `getliveplays`
export const toolDescription = `Live metrics and PBP (Patreon only)`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/live/plays`
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

export const inputParams = z.object({ "query": z.object({ "id": z.number().int().describe("Game id") }).optional() }).shape