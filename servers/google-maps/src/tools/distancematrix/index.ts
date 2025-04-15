import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "distancematrix",
  "toolDescription": "The Distance Matrix API is a service that provides travel distance and time for a matrix of origins and destinations. The API returns information based on the recommended route between start and end points, as calculated by the Google Maps",
  "baseUrl": "https://maps.googleapis.com",
  "path": "/maps/api/distancematrix/json",
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
      "arrival_time": "arrival_time",
      "departure_time": "departure_time",
      "avoid": "avoid",
      "destinations": "destinations",
      "origins": "origins",
      "units": "units",
      "language": "language",
      "mode": "mode",
      "region": "region",
      "traffic_model": "traffic_model",
      "transit_mode": "transit_mode",
      "transit_routing_preference": "transit_routing_preference"
    }
  },
  inputParamsSchema
}

export default tool