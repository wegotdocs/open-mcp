import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateuser",
  "toolDescription": "Update user resource.",
  "baseUrl": "/api/v3",
  "path": "/user/{username}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "username": "username"
    },
    "body": {
      "id": "id",
      "username": "b_username",
      "firstName": "firstName",
      "lastName": "lastName",
      "email": "email",
      "password": "password",
      "phone": "phone",
      "userStatus": "userStatus"
    }
  },
  inputParamsSchema
}

export default tool