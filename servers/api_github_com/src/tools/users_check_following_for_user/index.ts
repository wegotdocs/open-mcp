import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_check_following_for_user",
  "toolDescription": "Check if a user follows another user",
  "baseUrl": "https://api.github.com",
  "path": "/users/{username}/following/{target_user}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "username": "username",
      "target_user": "target_user"
    }
  },
  inputParamsSchema
}

export default tool