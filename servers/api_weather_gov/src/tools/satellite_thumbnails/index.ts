export { inputParams } from "./schema/root.js"

export const toolName = `satellite_thumbnails`
export const toolDescription = `Returns a thumbnail image for a satellite region. Image services in API are deprecated.`
export const baseUrl = `https://api.weather.gov`
export const path = `/thumbnails/satellite/{area}`
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