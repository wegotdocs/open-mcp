import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v1_1_observedproperties",
  "toolDescription": "Get all observed properties",
  "baseUrl": "https://sensors.bgs.ac.uk/FROST-Server",
  "path": "/v1.1/ObservedProperties",
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