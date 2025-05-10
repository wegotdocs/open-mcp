import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_list_public_emails_for_authenticated_user",
  "toolDescription": "List public email addresses for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/public_emails",
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