export { inputParams } from "./schema/root.js"

export const toolName = `station_observation_latest`
export const toolDescription = `Returns the latest observation for a station`
export const baseUrl = `https://api.weather.gov`
export const path = `/stations/{stationId}/observations/latest`
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
    "require_qc"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}