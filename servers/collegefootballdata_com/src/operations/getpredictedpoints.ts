import { z } from "zod"

export const toolName = `getpredictedpoints`
export const toolDescription = `Predicted Points (i.e. Expected Points or EP)`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/ppa/predicted`
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

export const inputParams = z.object({ "query": z.object({ "down": z.number().int().gte(1).lte(4).describe("Down filter"), "distance": z.number().int().gte(1).lte(99).describe("Distance filter") }).optional() }).shape