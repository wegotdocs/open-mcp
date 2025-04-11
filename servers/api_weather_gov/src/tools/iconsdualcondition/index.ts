export { inputParams } from "./schema/root.js"

export const toolName = `iconsdualcondition`
export const toolDescription = `Returns a forecast icon. Icon services in API are deprecated.`
export const baseUrl = `https://api.weather.gov`
export const path = `/icons/{set}/{timeOfDay}/{first}/{second}`
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