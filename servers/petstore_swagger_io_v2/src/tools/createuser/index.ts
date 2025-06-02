import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createuser",
  "toolDescription": "Create user",
  "baseUrl": "http://petstore.swagger.io/v2",
  "path": "/user",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "username": "username",
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