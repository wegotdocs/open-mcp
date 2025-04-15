import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "textsearch",
  "toolDescription": "The Google Places API Text Search Service is a web service that returns information about a set of places based on a string — for example \"pizza in New York\" or \"shoe stores near Ottawa\" or \"123 Main Street\". The service responds with a lis",
  "baseUrl": "https://maps.googleapis.com",
  "path": "/maps/api/place/textsearch/json",
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
      "location": "location",
      "maxprice": "maxprice",
      "minprice": "minprice",
      "opennow": "opennow",
      "pagetoken": "pagetoken",
      "query": "query",
      "radius": "radius",
      "type": "type",
      "language": "language",
      "region": "region"
    }
  },
  inputParamsSchema
}

export default tool