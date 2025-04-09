export { inputParams } from "./schema/root.js"

export const toolName = `updatefeedback`
export const toolDescription = `Updates existing feedback`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/feedback/{id}`
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
    "id"
  ],
  "cookie": [],
  "body": [
    "value",
    "weight",
    "metadata"
  ]
}
export const flatMap = {}