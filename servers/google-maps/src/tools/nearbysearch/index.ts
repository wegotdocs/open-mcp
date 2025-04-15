import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "nearbysearch",
  "toolDescription": "A Nearby Search lets you search for places within a specified area. You can refine your search request by supplying keywords or specifying the type of place you are searching for.",
  "baseUrl": "https://maps.googleapis.com",
  "path": "/maps/api/place/nearbysearch/json",
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
      "keyword": "keyword",
      "location": "location",
      "maxprice": "maxprice",
      "minprice": "minprice",
      "name": "name",
      "opennow": "opennow",
      "pagetoken": "pagetoken",
      "rankby": "rankby",
      "radius": "radius",
      "type": "type",
      "language": "language"
    }
  },
  inputParamsSchema
}

export default tool