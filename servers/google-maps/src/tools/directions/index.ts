export { inputParams } from "./schema/root.js"

export const toolName = `directions`
export const toolDescription = `The Directions API is a web service that uses an HTTP request to return JSON or XML-formatted directions between locations. You can receive directions for several modes of transportation, such as transit, driving, walking, or cycling.`
export const baseUrl = `https://maps.googleapis.com`
export const path = `/maps/api/directions/json`
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
    "arrival_time",
    "departure_time",
    "alternatives",
    "avoid",
    "destination",
    "origin",
    "units",
    "waypoints",
    "language",
    "mode",
    "region",
    "traffic_model",
    "transit_mode",
    "transit_routing_preference"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}