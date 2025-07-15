import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getholidays",
  "toolDescription": "List team holidays",
  "baseUrl": "https://api.float.com/v3",
  "path": "/holidays",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "page": "page",
      "per-page": "per-page"
    }
  },
  inputParamsSchema
}

export default tool