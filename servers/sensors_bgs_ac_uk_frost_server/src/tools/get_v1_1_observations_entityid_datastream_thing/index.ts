import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v1_1_observations_entityid_datastream_thing",
  "toolDescription": "",
  "baseUrl": "https://sensors.bgs.ac.uk/FROST-Server",
  "path": "/v1.1/Observations({entityId})/Datastream/Thing",
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