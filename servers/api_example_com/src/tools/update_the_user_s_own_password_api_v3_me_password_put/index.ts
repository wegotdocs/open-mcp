import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_the_user_s_own_password_api_v3_me_password_put",
  "toolDescription": "[user] Update the user's own password",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/me/password",
  "method": "put",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "old_password": "old_password",
      "new_password": "new_password"
    }
  },
  inputParamsSchema
}

export default tool