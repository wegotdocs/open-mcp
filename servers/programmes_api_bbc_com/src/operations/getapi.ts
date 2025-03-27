import { z } from "zod"

export const toolName = `getapi`
export const toolDescription = `Get API definition`
export const baseUrl = `https://programmes.api.bbc.com`
export const path = `/`
export const method = `get`
export const security = [
  {
    "key": "api_key",
    "value": "<mcp-env-var>API_KEY</mcp-env-var>",
    "in": "query",
    "envVarName": "API_KEY",
    "schemeType": "apiKey",
    "schemeName": "api_key"
  }
]

export const inputParams = z.object({}).shape