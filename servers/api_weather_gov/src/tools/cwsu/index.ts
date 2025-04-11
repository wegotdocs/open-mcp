export { inputParams } from "./schema/root.js"

export const toolName = `cwsu`
export const toolDescription = `Returns metadata about a Center Weather Service Unit`
export const baseUrl = `https://api.weather.gov`
export const path = `/aviation/cwsus/{cwsuId}`
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
  "path": [
    "cwsuId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}