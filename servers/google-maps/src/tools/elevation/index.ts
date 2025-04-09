export { inputParams } from "./schema/root.js"

export const toolName = `elevation`
export const toolDescription = `The Elevation API provides a simple interface to query locations on the earth for elevation data. Additionally, you may request sampled elevation data along paths, allowing you to calculate elevation changes along routes. With the Elevation`
export const baseUrl = `https://www.googleapis.com`
export const path = `/maps/api/elevation/json`
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
    "locations",
    "path",
    "samples"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}