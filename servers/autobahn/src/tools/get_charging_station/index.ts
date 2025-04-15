import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_charging_station",
  "toolDescription": "Details zu einer Ladestation",
  "baseUrl": "https://verkehr.autobahn.de/o/autobahn",
  "path": "/details/electric_charging_station/{stationId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "stationId": "stationId"
    }
  },
  inputParamsSchema
}

export default tool