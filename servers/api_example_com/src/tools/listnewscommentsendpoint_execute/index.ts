import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listnewscommentsendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/news/comments",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "userId": "userId",
      "newsId": "newsId"
    }
  },
  inputParamsSchema
}

export default tool