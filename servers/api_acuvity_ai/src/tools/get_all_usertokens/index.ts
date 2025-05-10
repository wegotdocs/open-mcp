import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_usertokens",
  "toolDescription": "List all usertokens available.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/usertokens",
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