export { inputParams } from "./schema/root.js"

export const toolName = `radar_station`
export const toolDescription = `Returns metadata about a given radar station`
export const baseUrl = `https://api.weather.gov`
export const path = `/radar/stations/{stationId}`
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
    "reportingHost",
    "host"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}