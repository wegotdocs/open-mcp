export { inputParams } from "./schema/root.js"

export const toolName = `sigmetquery`
export const toolDescription = `Returns a list of SIGMET/AIRMETs`
export const baseUrl = `https://api.weather.gov`
export const path = `/aviation/sigmets`
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
    "start",
    "end",
    "date",
    "atsu",
    "sequence"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}