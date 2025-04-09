export { inputParams } from "./schema/root.js"

export const toolName = `autocomplete`
export const toolDescription = `The Place Autocomplete service is a web service that returns place predictions in response to an HTTP request. The request specifies a textual search string and optional geographic bounds. The service can be used to provide autocomplete fun`
export const baseUrl = `https://www.googleapis.com`
export const path = `/maps/api/place/autocomplete/json`
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
    "sessiontoken",
    "components",
    "strictbounds",
    "offset",
    "origin",
    "location",
    "locationbias",
    "locationrestriction",
    "radius",
    "types",
    "language",
    "region"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}