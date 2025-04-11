export { inputParams } from "./schema/root.js"

export const toolName = `sigmet`
export const toolDescription = `Returns a specific SIGMET/AIRMET`
export const baseUrl = `https://api.weather.gov`
export const path = `/aviation/sigmets/{atsu}/{date}/{time}`
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
    "atsu",
    "date",
    "time"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}