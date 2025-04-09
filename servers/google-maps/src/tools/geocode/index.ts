export { inputParams } from "./schema/root.js"

export const toolName = `geocode`
export const toolDescription = `The Geocoding API is a service that provides geocoding and reverse geocoding of addresses.

**Geocoding** is the process of converting addresses (like a street address) into geographic coordinates (like latitude and longitude), which you ca`
export const baseUrl = `https://maps.googleapis.com`
export const path = `/maps/api/geocode/json`
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
    "address",
    "bounds",
    "components",
    "latlng",
    "location_type",
    "place_id",
    "result_type",
    "language",
    "region"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}