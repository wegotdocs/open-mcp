export { inputParams } from "./schema/root.js"

export const toolName = `zone_list_type`
export const toolDescription = `Returns a list of zones of a given type`
export const baseUrl = `https://api.weather.gov`
export const path = `/zones/{type}`
export const method = `get`
export const security = [
  {
    "key": "User-Agent",
    "value": "<mcp-env-var>USER_AGENT</mcp-env-var>",
    "in": "header",
    "envVarName": "USER_AGENT",
    "schemeType": "apiKey",
    "schemeName": "User-Agent"
  }
]
export const keys = {
  "query": [
    "id",
    "area",
    "region",
    "type",
    "point",
    "include_geometry",
    "limit",
    "effective"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}