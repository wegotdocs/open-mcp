import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_soil_type_type_get",
  "toolDescription": "Get soil type",
  "baseUrl": "https://api.openepi.io/soil",
  "path": "/type",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "lon": "lon",
      "lat": "lat",
      "top_k": "top_k"
    }
  },
  inputParamsSchema
}

export default tool