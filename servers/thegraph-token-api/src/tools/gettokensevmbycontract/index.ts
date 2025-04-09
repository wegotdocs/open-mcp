export { inputParams } from "./schema/root.js"

export const toolName = `gettokensevmbycontract`
export const toolDescription = `Token Metadata by Contract`
export const baseUrl = `https://token-api.thegraph.com`
export const path = `/tokens/evm/{contract}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [
    "network_id"
  ],
  "header": [],
  "path": [
    "contract"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}