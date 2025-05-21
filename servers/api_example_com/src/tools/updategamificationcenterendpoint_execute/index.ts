import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updategamificationcenterendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/gamifications/{userId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "userId": "userId"
    },
    "body": {
      "interactionsCount": "interactionsCount",
      "tokens": "tokens"
    }
  },
  inputParamsSchema
}

export default tool