import { z } from "zod"

export const toolName = `getconferences`
export const toolDescription = `Conferences`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/conferences`
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

export const inputParams = z.object({}).shape