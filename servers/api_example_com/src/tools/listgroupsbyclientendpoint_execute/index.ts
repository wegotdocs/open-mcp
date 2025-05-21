import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listgroupsbyclientendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/groups/client/{clientId}",
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