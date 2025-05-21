import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listdepartmentsbyclientendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/departments/client/{clientId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "clientId": "clientId"
    }
  },
  inputParamsSchema
}

export default tool