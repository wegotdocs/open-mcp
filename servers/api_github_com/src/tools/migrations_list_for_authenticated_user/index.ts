import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrations_list_for_authenticated_user",
  "toolDescription": "List user migrations",
  "baseUrl": "https://api.github.com",
  "path": "/user/migrations",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool