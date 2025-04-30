import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_orgsettings",
  "toolDescription": "List all orgsettings.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/orgsettings",
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