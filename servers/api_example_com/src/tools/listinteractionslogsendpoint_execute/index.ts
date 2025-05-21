import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listinteractionslogsendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/interactions-logs/list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "userId": "userId",
      "type": "type",
      "createdDateString": "createdDateString",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool