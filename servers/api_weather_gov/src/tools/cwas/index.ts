export { inputParams } from "./schema/root.js"

export const toolName = `cwas`
export const toolDescription = `Returns a list of Center Weather Advisories from a CWSU`
export const baseUrl = `https://api.weather.gov`
export const path = `/aviation/cwsus/{cwsuId}/cwas`
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