import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createfeedbackendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/feedbacks",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "userId": "userId",
      "comments": "comments",
      "subcategoryId": "subcategoryId",
      "departmentId": "departmentId",
      "score": "score"
    }
  },
  inputParamsSchema
}

export default tool