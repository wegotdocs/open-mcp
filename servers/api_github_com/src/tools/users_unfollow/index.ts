import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_unfollow",
  "toolDescription": "Unfollow a user",
  "baseUrl": "https://api.github.com",
  "path": "/user/following/{username}",
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