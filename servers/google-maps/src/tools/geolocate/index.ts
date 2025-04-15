import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "geolocate",
  "toolDescription": "Geolocation API returns a location and accuracy radius based on information about cell towers and WiFi nodes that the mobile client can detect. This document describes the protocol used to send this data to the server and to return a respon",
  "baseUrl": "https://www.googleapis.com",
  "path": "/geolocation/v1/geolocate",
  "method": "post",
  "security": [
    {
      "key": "key",
      "value": "<mcp-env-var>KEY</mcp-env-var>",
      "in": "query",
      "envVarName": "KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "homeMobileCountryCode": "homeMobileCountryCode",
      "homeMobileNetworkCode": "homeMobileNetworkCode",
      "radioType": "radioType",
      "carrier": "carrier",
      "considerIp": "considerIp",
      "cellTowers": "cellTowers",
      "wifiAccessPoints": "wifiAccessPoints"
    }
  },
  inputParamsSchema
}

export default tool