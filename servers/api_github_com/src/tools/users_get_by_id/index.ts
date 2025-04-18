import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_get_by_id",
  "toolDescription": "Get a user using their ID",
  "baseUrl": "https://api.github.com",
  "path": "/user/{account_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "account_id": "account_id"
    }
  },
  inputParamsSchema
}

export default tool