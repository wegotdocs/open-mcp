import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addlikenewsendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/news/like/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "userId": "userId"
    }
  },
  inputParamsSchema
}

export default tool