import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getgamificationcenterendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/gamifications/detail/{userId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "userId": "userId"
    }
  },
  inputParamsSchema
}

export default tool