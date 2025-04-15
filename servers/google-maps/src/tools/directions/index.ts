import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "directions",
  "toolDescription": "The Directions API is a web service that uses an HTTP request to return JSON or XML-formatted directions between locations. You can receive directions for several modes of transportation, such as transit, driving, walking, or cycling.",
  "baseUrl": "https://maps.googleapis.com",
  "path": "/maps/api/directions/json",
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
      "alternatives": "alternatives",
      "avoid": "avoid",
      "destination": "destination",
      "origin": "origin",
      "units": "units",
      "waypoints": "waypoints",
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