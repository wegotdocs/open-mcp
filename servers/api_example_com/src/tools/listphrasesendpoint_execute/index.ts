import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listphrasesendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/phrases/list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "clientId": "clientId",
      "groupId": "groupId",
      "dateString": "dateString"
    }
  },
  inputParamsSchema
}

export default tool