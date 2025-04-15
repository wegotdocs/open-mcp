import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_parking_lorries",
  "toolDescription": "Liste verfügbarer Rastplätze",
  "baseUrl": "https://verkehr.autobahn.de/o/autobahn",
  "path": "/{roadId}/services/parking_lorry",
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