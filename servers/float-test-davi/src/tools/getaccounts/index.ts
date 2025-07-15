import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getaccounts",
  "toolDescription": "List accounts",
  "baseUrl": "https://api.float.com/v3",
  "path": "/accounts",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "expand": "expand",
      "page": "page",
      "per-page": "per-page"
    }
  },
  inputParamsSchema
}

export default tool