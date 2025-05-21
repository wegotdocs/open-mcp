import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createnewscommentendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/news/comments",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "comment": "comment",
      "userId": "userId",
      "newsId": "newsId"
    }
  },
  inputParamsSchema
}

export default tool