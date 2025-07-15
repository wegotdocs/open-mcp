import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdepartments",
  "toolDescription": "List departments",
  "baseUrl": "https://api.float.com/v3",
  "path": "/departments",
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