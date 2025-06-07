import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_notifications_api_notifications_get",
  "toolDescription": "Get Notifications",
  "baseUrl": "https://api.example.com",
  "path": "/api/notifications",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "since": "since",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool