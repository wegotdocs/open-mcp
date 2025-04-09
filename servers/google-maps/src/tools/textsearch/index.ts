export { inputParams } from "./schema/root.js"

export const toolName = `textsearch`
export const toolDescription = `The Google Places API Text Search Service is a web service that returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street". The service responds with a lis`
export const baseUrl = `https://maps.googleapis.com`
export const path = `/maps/api/place/textsearch/json`
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
    "location",
    "maxprice",
    "minprice",
    "opennow",
    "pagetoken",
    "query",
    "radius",
    "type",
    "language",
    "region"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}