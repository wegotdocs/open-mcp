export { inputParams } from "./schema/root.js"

export const toolName = `products_type_location`
export const toolDescription = `Returns a list of text products of a given type for a given issuance location`
export const baseUrl = `https://api.weather.gov`
export const path = `/products/types/{typeId}/locations/{locationId}`
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