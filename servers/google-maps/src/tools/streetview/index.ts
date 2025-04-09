export { inputParams } from "./schema/root.js"

export const toolName = `streetview`
export const toolDescription = `The Street View Static API lets you embed a static (non-interactive) Street View panorama or thumbnail into your web page, without the use of JavaScript. The viewport is defined with URL parameters sent through a standard HTTP request, and`
export const baseUrl = `https://maps.googleapis.com`
export const path = `/maps/api/streetview`
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
    "fov",
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