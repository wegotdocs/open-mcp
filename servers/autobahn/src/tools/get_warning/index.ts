import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_warning",
  "toolDescription": "Details zu einer Verkehrsmeldung",
  "baseUrl": "https://verkehr.autobahn.de/o/autobahn",
  "path": "/details/warning/{warningId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "warningId": "warningId"
    }
  },
  inputParamsSchema
}

export default tool