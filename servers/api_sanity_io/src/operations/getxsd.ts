import { z } from "zod"

export const toolName = `getxsd`
export const toolDescription = `Get Schema definition`
export const baseUrl = `https://programmes.api.bbc.com`
export const path = `/schema`
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