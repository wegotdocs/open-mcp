import { z } from "zod"

export const toolName = `post_logs_exports_exportid_cancel`
export const toolDescription = `Cancel log export`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/logs/exports/{exportId}/cancel`
export const method = `post`
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
  "query": [],
  "header": [],
  "path": [
    "exportId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "exportId": z.string()
}