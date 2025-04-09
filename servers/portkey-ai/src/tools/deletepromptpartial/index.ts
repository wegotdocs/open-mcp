export { inputParams } from "./schema/root.js"

export const toolName = `deletepromptpartial`
export const toolDescription = `Delete a prompt partial`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/prompts/partials/{promptPartialId}`
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
    "promptPartialId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}