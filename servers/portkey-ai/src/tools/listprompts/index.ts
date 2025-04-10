export { inputParams } from "./schema/root.js"

export const toolName = `listprompts`
export const toolDescription = `List prompts`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/prompts`
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
    "collection_id",
    "workspace_id",
    "current_page",
    "page_size",
    "search"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}