import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_closure",
  "toolDescription": "Details zu einer Sperrung",
  "baseUrl": "https://verkehr.autobahn.de/o/autobahn",
  "path": "/details/closure/{closureId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "closureId": "closureId"
    }
  },
  inputParamsSchema
}

export default tool