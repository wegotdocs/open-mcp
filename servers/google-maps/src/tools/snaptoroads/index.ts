export { inputParams } from "./schema/root.js"

export const toolName = `snaptoroads`
export const toolDescription = `This service returns the best-fit road geometry for a given set of GPS coordinates. This service takes up to 100 GPS points collected along a route, and returns a similar set of data with the points snapped to the most likely roads the vehi`
export const baseUrl = `https://www.googleapis.com`
export const path = `/v1/snaptoroads`
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
    "path",
    "interpolate"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}