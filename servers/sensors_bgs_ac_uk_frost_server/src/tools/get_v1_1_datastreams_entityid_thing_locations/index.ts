import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v1_1_datastreams_entityid_thing_locations",
  "toolDescription": "Get all locations for a datastream's thing",
  "baseUrl": "https://sensors.bgs.ac.uk/FROST-Server",
  "path": "/v1.1/Datastreams({entityId})/Thing/Locations",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "entityId": "entityId"
    },
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