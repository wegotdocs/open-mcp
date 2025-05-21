import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "creategroupendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/groups",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "icon": "icon",
      "isAdmin": "isAdmin",
      "clientId": "clientId"
    }
  },
  inputParamsSchema
}

export default tool