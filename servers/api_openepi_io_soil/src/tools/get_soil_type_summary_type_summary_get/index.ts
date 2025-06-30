import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_soil_type_summary_type_summary_get",
  "toolDescription": "Get soil type summary",
  "baseUrl": "https://api.openepi.io/soil",
  "path": "/type/summary",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "min_lon": "min_lon",
      "max_lon": "max_lon",
      "min_lat": "min_lat",
      "max_lat": "max_lat"
    }
  },
  inputParamsSchema
}

export default tool