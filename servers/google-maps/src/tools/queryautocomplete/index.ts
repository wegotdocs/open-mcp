export { inputParams } from "./schema/root.js"

export const toolName = `queryautocomplete`
export const toolDescription = `The Query Autocomplete service can be used to provide a query prediction for text-based geographic searches, by returning suggested queries as you type.

The Query Autocomplete service allows you to add on-the-fly geographic query predictio`
export const baseUrl = `https://www.googleapis.com`
export const path = `/maps/api/place/queryautocomplete/json`
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
    "input",
    "offset",
    "location",
    "radius",
    "language"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}