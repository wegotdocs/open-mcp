import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_unblock_user",
  "toolDescription": "Unblock a user from an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/blocks/{username}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool