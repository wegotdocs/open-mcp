export { inputParams } from "./schema/root.js"

export const toolName = `nearbysearch`
export const toolDescription = `A Nearby Search lets you search for places within a specified area. You can refine your search request by supplying keywords or specifying the type of place you are searching for.`
export const baseUrl = `https://maps.googleapis.com`
export const path = `/maps/api/place/nearbysearch/json`
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
    "keyword",
    "location",
    "maxprice",
    "minprice",
    "name",
    "opennow",
    "pagetoken",
    "rankby",
    "radius",
    "type",
    "language"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}