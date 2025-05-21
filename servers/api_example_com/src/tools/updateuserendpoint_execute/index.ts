import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateuserendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/users/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "username": "username",
      "email": "email",
      "firstName": "firstName",
      "lastName": "lastName",
      "birthDate": "birthDate",
      "workJoinedDate": "workJoinedDate",
      "adminType": "adminType",
      "positionId": "positionId",
      "groupId": "groupId",
      "departmentId": "departmentId"
    }
  },
  inputParamsSchema
}

export default tool