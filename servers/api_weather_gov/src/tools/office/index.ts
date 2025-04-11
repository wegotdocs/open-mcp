export { inputParams } from "./schema/root.js"

export const toolName = `office`
export const toolDescription = `Returns metadata about a NWS forecast office`
export const baseUrl = `https://api.weather.gov`
export const path = `/offices/{officeId}`
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