import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v1_1_locations_entityid_",
  "toolDescription": "Get information about an individual location",
  "baseUrl": "https://sensors.bgs.ac.uk/FROST-Server",
  "path": "/v1.1/Locations({entityId})",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "entityId": "entityId"
    },
    "query": {
      "$select": "$select",
      "$expand": "$expand"
    }
  },
  inputParamsSchema
}

export default tool