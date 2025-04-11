export { inputParams } from "./schema/root.js"

export const toolName = `gridpoint`
export const toolDescription = `Returns raw numerical forecast data for a 2.5km grid area`
export const baseUrl = `https://api.weather.gov`
export const path = `/gridpoints/{wfo}/{x},{y}`
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