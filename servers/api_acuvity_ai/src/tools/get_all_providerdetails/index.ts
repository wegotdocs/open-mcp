import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_providerdetails",
  "toolDescription": "List all available provider details.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/providerdetails",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "icon": "icon",
      "q": "q"
    }
  },
  inputParamsSchema
}

export default tool