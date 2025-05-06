import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_block_user",
  "toolDescription": "Block a user from an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/blocks/{username}",
  "method": "put",
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