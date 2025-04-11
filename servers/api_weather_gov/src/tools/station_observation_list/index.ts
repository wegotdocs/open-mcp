export { inputParams } from "./schema/root.js"

export const toolName = `station_observation_list`
export const toolDescription = `Returns a list of observations for a given station`
export const baseUrl = `https://api.weather.gov`
export const path = `/stations/{stationId}/observations`
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