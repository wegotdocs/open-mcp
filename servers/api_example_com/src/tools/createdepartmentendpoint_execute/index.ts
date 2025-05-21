import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createdepartmentendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/departments",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "clientId": "clientId"
    }
  },
  inputParamsSchema
}

export default tool