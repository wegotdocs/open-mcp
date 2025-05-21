import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "countfeedbacksendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/feedbacks/count",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "clientId": "clientId",
      "groupId": "groupId"
    }
  },
  inputParamsSchema
}

export default tool