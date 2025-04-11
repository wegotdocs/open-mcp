export { inputParams } from "./schema/root.js"

export const toolName = `zone_forecast`
export const toolDescription = `Returns the current zone forecast for a given zone`
export const baseUrl = `https://api.weather.gov`
export const path = `/zones/{type}/{zoneId}/forecast`
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
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}