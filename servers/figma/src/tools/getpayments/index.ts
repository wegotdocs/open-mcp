export { inputParams } from "./schema/root.js"

export const toolName = `getpayments`
export const toolDescription = `Get payments`
export const baseUrl = `https://api.figma.com`
export const path = `/v1/payments`
export const method = `get`
export const security = [
  {
    "key": "X-Figma-Token",
    "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "X_FIGMA_TOKEN",
    "schemeType": "apiKey",
    "schemeName": "X-Figma-Token"
  }
]
export const keys = {
  "query": [
    "plugin_payment_token",
    "user_id",
    "community_file_id",
    "plugin_id",
    "widget_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}