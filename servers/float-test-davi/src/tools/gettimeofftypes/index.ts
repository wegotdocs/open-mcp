import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettimeofftypes",
  "toolDescription": "List of time off types",
  "baseUrl": "https://api.float.com/v3",
  "path": "/timeoff-types",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "active": "active",
      "page": "page",
      "per-page": "per-page"
    }
  },
  inputParamsSchema
}

export default tool