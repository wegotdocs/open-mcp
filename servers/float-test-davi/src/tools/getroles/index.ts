import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getroles",
  "toolDescription": "List roles",
  "baseUrl": "https://api.float.com/v3",
  "path": "/roles",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "page": "page",
      "per-page": "per-page",
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool