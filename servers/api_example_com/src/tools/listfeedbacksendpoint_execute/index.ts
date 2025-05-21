import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listfeedbacksendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/feedbacks/list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "clientId": "clientId",
      "categoryId": "categoryId",
      "subcategoryId": "subcategoryId",
      "userId": "userId",
      "departmentId": "departmentId",
      "forEvaluation": "forEvaluation",
      "groupId": "groupId"
    }
  },
  inputParamsSchema
}

export default tool