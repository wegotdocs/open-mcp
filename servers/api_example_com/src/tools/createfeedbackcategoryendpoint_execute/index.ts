import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createfeedbackcategoryendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/feedback-categories",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "clientId": "clientId"
    }
  },
  inputParamsSchema
}

export default tool