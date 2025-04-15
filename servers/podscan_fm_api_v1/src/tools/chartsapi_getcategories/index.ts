export { inputParams } from "./schema/root.js"

export const toolName = `chartsapi_getcategories`
export const toolDescription = `Get available categories`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/charts/{platform}/{countryCode}/categories`
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
  "query": [],
  "header": [],
  "path": [
    "platform",
    "countryCode"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}