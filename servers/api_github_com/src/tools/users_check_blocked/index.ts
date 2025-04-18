import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_check_blocked",
  "toolDescription": "Check if a user is blocked by the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/blocks/{username}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool