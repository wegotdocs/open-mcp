export { inputParams } from "./schema/root.js"

export const toolName = `parameters_alerts_active_region_region_`
export const toolDescription = ``
export const baseUrl = `https://api.weather.gov`
export const path = `/alerts/active/region/{region}`
export const method = `parameters`
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