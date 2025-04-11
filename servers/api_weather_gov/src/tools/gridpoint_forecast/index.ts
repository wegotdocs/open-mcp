export { inputParams } from "./schema/root.js"

export const toolName = `gridpoint_forecast`
export const toolDescription = `Returns a textual forecast for a 2.5km grid area`
export const baseUrl = `https://api.weather.gov`
export const path = `/gridpoints/{wfo}/{x},{y}/forecast`
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
    "units"
  ],
  "header": [
    "Feature-Flags"
  ],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}