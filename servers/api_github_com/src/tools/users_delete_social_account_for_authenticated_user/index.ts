import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_delete_social_account_for_authenticated_user",
  "toolDescription": "Delete social accounts for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/social_accounts",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "body": {
      "account_urls": "account_urls"
    }
  },
  inputParamsSchema
}

export default tool