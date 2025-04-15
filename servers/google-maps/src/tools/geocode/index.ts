import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "geocode",
  "toolDescription": "The Geocoding API is a service that provides geocoding and reverse geocoding of addresses.\n\n**Geocoding** is the process of converting addresses (like a street address) into geographic coordinates (like latitude and longitude), which you ca",
  "baseUrl": "https://maps.googleapis.com",
  "path": "/maps/api/geocode/json",
  "method": "get",
  "security": [
    {
      "key": "key",
      "value": "<mcp-env-var>KEY</mcp-env-var>",
      "in": "query",
      "envVarName": "KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "address": "address",
      "bounds": "bounds",
      "components": "components",
      "latlng": "latlng",
      "location_type": "location_type",
      "place_id": "place_id",
      "result_type": "result_type",
      "language": "language",
      "region": "region"
    }
  },
  inputParamsSchema
}

export default tool