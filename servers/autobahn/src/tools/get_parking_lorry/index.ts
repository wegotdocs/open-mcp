import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_parking_lorry",
  "toolDescription": "Details eines Rastplatzes",
  "baseUrl": "https://verkehr.autobahn.de/o/autobahn",
  "path": "/details/parking_lorry/{lorryId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "lorryId": "lorryId"
    }
  },
  inputParamsSchema
}

export default tool