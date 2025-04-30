import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_ignoreddomains",
  "toolDescription": "List all ignored domains.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/ignoreddomains",
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