import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createadminuserendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/users/admin",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "username": "username",
      "email": "email",
      "firstName": "firstName",
      "lastName": "lastName",
      "birthDate": "birthDate",
      "adminType": "adminType",
      "groupId": "groupId",
      "departmentId": "departmentId",
      "clientId": "clientId"
    }
  },
  inputParamsSchema
}

export default tool