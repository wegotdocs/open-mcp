import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listgamificationcentersendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/gamifications/list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "clientId": "clientId",
      "groupId": "groupId",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool