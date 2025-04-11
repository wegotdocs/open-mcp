export { inputParams } from "./schema/root.js"

export const toolName = `sigmetsbyatsu`
export const toolDescription = `Returns a list of SIGMET/AIRMETs for the specified ATSU`
export const baseUrl = `https://api.weather.gov`
export const path = `/aviation/sigmets/{atsu}`
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
    "atsu"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}