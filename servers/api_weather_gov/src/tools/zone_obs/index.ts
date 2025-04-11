export { inputParams } from "./schema/root.js"

export const toolName = `zone_obs`
export const toolDescription = `Returns a list of observations for a given zone`
export const baseUrl = `https://api.weather.gov`
export const path = `/zones/forecast/{zoneId}/observations`
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
    "start",
    "end",
    "limit"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}