import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activate_user_api_users_activate_post",
  "toolDescription": "Activate User",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/activate",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "code": "code",
      "login": "login"
    }
  },
  inputParamsSchema
}

export default tool