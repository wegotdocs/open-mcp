import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_charging_stations",
  "toolDescription": "Liste aktueller Ladestationen",
  "baseUrl": "https://verkehr.autobahn.de/o/autobahn",
  "path": "/{roadId}/services/electric_charging_station",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "roadId": "roadId"
    }
  },
  inputParamsSchema
}

export default tool