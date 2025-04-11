export { inputParams } from "./schema/root.js"

export const toolName = `alerts_active_area`
export const toolDescription = `Returns active alerts for the given area (state or marine area)`
export const baseUrl = `https://api.weather.gov`
export const path = `/alerts/active/area/{area}`
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