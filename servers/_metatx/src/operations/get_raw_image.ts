import { z } from "zod"

export const toolName = `get_raw_image`
export const toolDescription = `Get raw image`
export const baseUrl = `https://programmes.api.bbc.com`
export const path = `/v1/images/{pid}`
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

export const inputParams = z.object({ "path": z.object({ "pid": z.string() }).optional() }).shape