import { z } from "zod"

export const toolName = `getadvancedboxscore`
export const toolDescription = `Advanced box scores`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/game/box/advanced`
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

export const inputParams = z.object({ "query": z.object({ "gameId": z.number().int().describe("Game id parameters") }).optional() }).shape