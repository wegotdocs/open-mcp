import { z } from "zod"

export const toolName = `getplaystattypes`
export const toolDescription = `Types of player play stats`
export const baseUrl = `https://api.collegefootballdata.com`
export const path = `/play/stat/types`
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