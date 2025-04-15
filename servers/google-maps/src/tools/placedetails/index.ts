import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "placedetails",
  "toolDescription": "The Places API is a service that returns information about places using HTTP requests. Places are defined within this API as establishments, geographic locations, or prominent points of interest.",
  "baseUrl": "https://maps.googleapis.com",
  "path": "/maps/api/place/details/json",
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
      "place_id": "place_id",
      "fields": "fields",
      "sessiontoken": "sessiontoken",
      "language": "language",
      "region": "region",
      "reviews_sort": "reviews_sort",
      "reviews_no_translations": "reviews_no_translations"
    }
  },
  inputParamsSchema
}

export default tool