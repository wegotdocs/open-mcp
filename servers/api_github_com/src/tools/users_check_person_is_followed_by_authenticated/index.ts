import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_check_person_is_followed_by_authenticated",
  "toolDescription": "Check if a person is followed by the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/following/{username}",
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