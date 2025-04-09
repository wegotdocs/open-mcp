export { inputParams } from "./schema/root.js"

export const toolName = `put_collections_collectionid_`
export const toolDescription = `Update collection`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/collections/{collectionId}`
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
  "path": [],
  "cookie": [],
  "body": [
    "name"
  ]
}
export const flatMap = {}