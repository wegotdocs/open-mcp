import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_users",
  "toolDescription": "Create a new user",
  "baseUrl": "https://example.com/api",
  "path": "/users",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "name": "name",
      "email": "email"
    }
  },
  inputParamsSchema
}

export default tool