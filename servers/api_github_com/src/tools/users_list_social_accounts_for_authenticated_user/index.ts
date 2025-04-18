import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_list_social_accounts_for_authenticated_user",
  "toolDescription": "List social accounts for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/social_accounts",
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