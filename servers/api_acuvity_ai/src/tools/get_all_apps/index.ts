import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_apps",
  "toolDescription": "List all apps.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/apps",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "q": "q"
    }
  },
  inputParamsSchema
}

export default tool