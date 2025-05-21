import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listfeelingsendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/feelings/list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "clientId": "clientId",
      "userId": "userId",
      "typeId": "typeId",
      "groupId": "groupId"
    }
  },
  inputParamsSchema
}

export default tool