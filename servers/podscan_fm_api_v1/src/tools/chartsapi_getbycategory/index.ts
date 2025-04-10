export { inputParams } from "./schema/root.js"

export const toolName = `chartsapi_getbycategory`
export const toolDescription = `Get category charts for a country`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/charts/{platform}/{countryCode}/{category}`
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
    "countryCode",
    "category"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}