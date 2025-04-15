import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_roadworks",
  "toolDescription": "Liste aktueller Baustellen",
  "baseUrl": "https://verkehr.autobahn.de/o/autobahn",
  "path": "/{roadId}/services/roadworks",
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