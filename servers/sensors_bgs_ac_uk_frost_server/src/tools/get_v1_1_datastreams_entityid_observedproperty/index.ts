import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v1_1_datastreams_entityid_observedproperty",
  "toolDescription": "Get information about a datastream's observed property",
  "baseUrl": "https://sensors.bgs.ac.uk/FROST-Server",
  "path": "/v1.1/Datastreams({entityId})/ObservedProperty",
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