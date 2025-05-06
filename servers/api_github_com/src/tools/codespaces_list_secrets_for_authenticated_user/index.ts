import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_list_secrets_for_authenticated_user",
  "toolDescription": "List secrets for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/codespaces/secrets",
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