export { inputParams } from "./schema/root.js"

export const toolName = `radar_servers`
export const toolDescription = `Returns a list of radar servers`
export const baseUrl = `https://api.weather.gov`
export const path = `/radar/servers`
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
    "reportingHost"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}