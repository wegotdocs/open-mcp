import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listusersendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/users/list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "clientId": "clientId",
      "isAdmin": "isAdmin",
      "isActive": "isActive",
      "isPasswordReset": "isPasswordReset",
      "adminType": "adminType",
      "groupId": "groupId",
      "deleted": "deleted"
    }
  },
  inputParamsSchema
}

export default tool