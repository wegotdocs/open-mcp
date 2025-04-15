import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_closures",
  "toolDescription": "Liste aktueller Sperrungen",
  "baseUrl": "https://verkehr.autobahn.de/o/autobahn",
  "path": "/{roadId}/services/closure",
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