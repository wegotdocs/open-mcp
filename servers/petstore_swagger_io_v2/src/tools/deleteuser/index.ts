import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteuser",
  "toolDescription": "Delete user",
  "baseUrl": "http://petstore.swagger.io/v2",
  "path": "/user/{username}",
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