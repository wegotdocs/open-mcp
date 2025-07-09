import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v1_1_sensors",
  "toolDescription": "Get all sensor types",
  "baseUrl": "https://sensors.bgs.ac.uk/FROST-Server",
  "path": "/v1.1/Sensors",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "$skip": "$skip",
      "$top": "$top",
      "$count": "$count",
      "$select": "$select",
      "$expand": "$expand",
      "$filter": "$filter"
    }
  },
  inputParamsSchema
}

export default tool