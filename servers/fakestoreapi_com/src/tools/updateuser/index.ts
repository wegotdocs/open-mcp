import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateuser",
  "toolDescription": "Update a user",
  "baseUrl": "https://fakestoreapi.com",
  "path": "/users/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "id": "b_id",
      "username": "username",
      "email": "email",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool