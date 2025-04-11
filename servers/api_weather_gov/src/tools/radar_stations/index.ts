export { inputParams } from "./schema/root.js"

export const toolName = `radar_stations`
export const toolDescription = `Returns a list of radar stations`
export const baseUrl = `https://api.weather.gov`
export const path = `/radar/stations`
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
    "stationType",
    "reportingHost",
    "host"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}