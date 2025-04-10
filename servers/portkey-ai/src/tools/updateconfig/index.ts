export { inputParams } from "./schema/root.js"

export const toolName = `updateconfig`
export const toolDescription = `Update a config`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/configs/{slug}`
export const method = `put`
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
  "body": [
    "name",
    "config",
    "status"
  ]
}
export const flatMap = {}