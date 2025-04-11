export { inputParams } from "./schema/root.js"

export const toolName = `obs_stations`
export const toolDescription = `Returns a list of observation stations.`
export const baseUrl = `https://api.weather.gov`
export const path = `/stations`
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
    "state",
    "limit",
    "cursor"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}