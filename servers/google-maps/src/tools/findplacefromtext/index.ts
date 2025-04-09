export { inputParams } from "./schema/root.js"

export const toolName = `findplacefromtext`
export const toolDescription = `A Find Place request takes a text input and returns a place. The input can be any kind of Places text data, such as a name, address, or phone number. The request must be a string. A Find Place request using non-string data such as a lat/lng`
export const baseUrl = `https://maps.googleapis.com`
export const path = `/maps/api/place/findplacefromtext/json`
export const method = `get`
export const security = [
  {
    "key": "key",
    "value": "<mcp-env-var>KEY</mcp-env-var>",
    "in": "query",
    "envVarName": "KEY",
    "schemeType": "apiKey",
    "schemeName": "key"
  }
]
export const keys = {
  "query": [
    "fields",
    "input",
    "inputtype",
    "locationbias",
    "language"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}