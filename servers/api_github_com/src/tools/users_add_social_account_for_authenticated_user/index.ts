import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_add_social_account_for_authenticated_user",
  "toolDescription": "Add social accounts for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/social_accounts",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "account_urls": "account_urls"
    }
  },
  inputParamsSchema
}

export default tool