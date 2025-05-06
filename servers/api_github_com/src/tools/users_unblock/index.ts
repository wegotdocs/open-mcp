import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_unblock",
  "toolDescription": "Unblock a user",
  "baseUrl": "https://api.github.com",
  "path": "/user/blocks/{username}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool