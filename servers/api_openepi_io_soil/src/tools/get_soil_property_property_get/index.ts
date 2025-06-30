import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_soil_property_property_get",
  "toolDescription": "Get soil property",
  "baseUrl": "https://api.openepi.io/soil",
  "path": "/property",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "lon": "lon",
      "lat": "lat",
      "depths": "depths",
      "properties": "properties",
      "values": "values"
    }
  },
  inputParamsSchema
}

export default tool