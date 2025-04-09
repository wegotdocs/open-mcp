export { inputParams } from "./schema/root.js"

export const toolName = `distancematrix`
export const toolDescription = `The Distance Matrix API is a service that provides travel distance and time for a matrix of origins and destinations. The API returns information based on the recommended route between start and end points, as calculated by the Google Maps`
export const baseUrl = `https://maps.googleapis.com`
export const path = `/maps/api/distancematrix/json`
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
    "avoid",
    "destinations",
    "origins",
    "units",
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