import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_follow",
  "toolDescription": "Follow a user",
  "baseUrl": "https://api.github.com",
  "path": "/user/following/{username}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool