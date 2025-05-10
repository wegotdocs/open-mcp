import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_list",
  "toolDescription": "List users",
  "baseUrl": "https://api.github.com",
  "path": "/users",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "since": "since",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool