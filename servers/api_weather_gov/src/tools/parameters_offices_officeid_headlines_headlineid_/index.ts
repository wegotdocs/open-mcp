export { inputParams } from "./schema/root.js"

export const toolName = `parameters_offices_officeid_headlines_headlineid_`
export const toolDescription = ``
export const baseUrl = `https://api.weather.gov`
export const path = `/offices/{officeId}/headlines/{headlineId}`
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