import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "query_layer_properties_properties_query_get",
  "toolDescription": "Queries a single pixel for information",
  "baseUrl": "/soilgrids/v2.0",
  "path": "/properties/query",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "lon": "lon",
      "lat": "lat",
      "property": "property",
      "depth": "depth",
      "value": "value"
    }
  },
  inputParamsSchema
}

export default tool