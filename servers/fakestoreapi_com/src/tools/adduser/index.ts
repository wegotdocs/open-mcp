import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "adduser",
  "toolDescription": "Add a new user",
  "baseUrl": "https://fakestoreapi.com",
  "path": "/users",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "username": "username",
      "email": "email",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool