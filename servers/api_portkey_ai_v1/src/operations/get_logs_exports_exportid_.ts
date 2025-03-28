import { z } from "zod"

export const toolName = `get_logs_exports_exportid_`
export const toolDescription = `Get a specific logs export`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/logs/exports/{exportId}`
export const method = `get`
export const security = [
  {
    "key": "x-portkey-api-key",
    "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-api-key"
  }
]

export const inputParams = z.object({ "path": z.object({ "exportId": z.string() }).optional() }).shape