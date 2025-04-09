export { inputParams } from "./schema/root.js"

export const toolName = `streetviewmetadata`
export const toolDescription = `The Street View Static API metadata requests provide data about Street View panoramas. Using the metadata, you can find out if a Street View image is available at a given location, as well as getting programmatic access to the latitude and`
export const baseUrl = `https://www.googleapis.com`
export const path = `/maps/api/streetview/metadata`
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
    "heading",
    "location",
    "pano",
    "pitch",
    "radius",
    "return_error_code",
    "signature",
    "size",
    "source"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}