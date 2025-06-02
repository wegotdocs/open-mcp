import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateuser",
  "toolDescription": "Updated user",
  "baseUrl": "http://petstore.swagger.io/v2",
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