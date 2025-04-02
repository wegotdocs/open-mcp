import { z } from "zod"

export const toolName = `delete_virtual_keys_slug_`
export const toolDescription = `Delete a Virtual Key`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/virtual-keys/{slug}`
export const method = `delete`
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
    "slug"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "slug": z.string() }).shape