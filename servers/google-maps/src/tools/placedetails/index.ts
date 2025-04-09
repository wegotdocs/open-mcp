export { inputParams } from "./schema/root.js"

export const toolName = `placedetails`
export const toolDescription = `The Places API is a service that returns information about places using HTTP requests. Places are defined within this API as establishments, geographic locations, or prominent points of interest.`
export const baseUrl = `https://www.googleapis.com`
export const path = `/maps/api/place/details/json`
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
    "place_id",
    "fields",
    "sessiontoken",
    "language",
    "region",
    "reviews_sort",
    "reviews_no_translations"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}