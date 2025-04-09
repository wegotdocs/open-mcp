export { inputParams } from "./schema/root.js"

export const toolName = `placephoto`
export const toolDescription = `The Place Photo service, part of the Places API, is a read- only API that allows you to add high quality photographic content to your application. The Place Photo service gives you access to the millions of photos stored in the Places datab`
export const baseUrl = `https://maps.googleapis.com`
export const path = `/maps/api/place/photo`
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
    "photo_reference",
    "maxheight",
    "maxwidth"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}