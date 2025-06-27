import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "query_layer_wrb_classification_query_get",
  "toolDescription": "Queries the WRB layers to extract most probable class, and probably of other classes",
  "baseUrl": "/soilgrids/v2.0",
  "path": "/classification/query",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "lon": "lon",
      "lat": "lat",
      "number_classes": "number_classes"
    }
  },
  inputParamsSchema
}

export default tool