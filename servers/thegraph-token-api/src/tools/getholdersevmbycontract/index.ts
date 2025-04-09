export { inputParams } from "./schema/root.js"

export const toolName = `getholdersevmbycontract`
export const toolDescription = `Token Holders by Contract Address`
export const baseUrl = `https://token-api.thegraph.com`
export const path = `/holders/evm/{contract}`
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
    "network_id",
    "order_by",
    "limit",
    "page"
  ],
  "header": [],
  "path": [
    "contract"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}