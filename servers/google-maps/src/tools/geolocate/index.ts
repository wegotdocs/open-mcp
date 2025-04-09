export { inputParams } from "./schema/root.js"

export const toolName = `geolocate`
export const toolDescription = `Geolocation API returns a location and accuracy radius based on information about cell towers and WiFi nodes that the mobile client can detect. This document describes the protocol used to send this data to the server and to return a respon`
export const baseUrl = `https://www.googleapis.com`
export const path = `/geolocation/v1/geolocate`
export const method = `post`
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
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "homeMobileCountryCode",
    "homeMobileNetworkCode",
    "radioType",
    "carrier",
    "considerIp",
    "cellTowers",
    "wifiAccessPoints"
  ]
}
export const flatMap = {}