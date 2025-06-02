import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcontracttemplates",
  "toolDescription": "List all contract templates",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/templates",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset",
      "pageCursor": "pageCursor",
      "pageSize": "pageSize",
      "type": "type",
      "initializationPhase": "initializationPhase"
    }
  },
  inputParamsSchema
}

export default tool