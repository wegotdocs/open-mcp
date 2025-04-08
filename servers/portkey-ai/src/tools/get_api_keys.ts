import { z } from "zod"

export const toolName = `get_api_keys`
export const toolDescription = `Get All`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/api-keys`
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
export const keys = {
  "query": [
    "page_size",
    "current_page",
    "workspace_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "page_size": z.number().int().optional(),
  "current_page": z.number().int().optional(),
  "workspace_id": z.string().optional()
}