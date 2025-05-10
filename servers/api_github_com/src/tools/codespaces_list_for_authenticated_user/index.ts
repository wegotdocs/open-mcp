import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_list_for_authenticated_user",
  "toolDescription": "List codespaces for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/codespaces",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "per_page": "per_page",
      "page": "page",
      "repository_id": "repository_id"
    }
  },
  inputParamsSchema
}

export default tool