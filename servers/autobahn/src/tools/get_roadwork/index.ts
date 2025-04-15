import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_roadwork",
  "toolDescription": "Details einer Baustelle",
  "baseUrl": "https://verkehr.autobahn.de/o/autobahn",
  "path": "/details/roadworks/{roadworkId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "roadworkId": "roadworkId"
    }
  },
  inputParamsSchema
}

export default tool