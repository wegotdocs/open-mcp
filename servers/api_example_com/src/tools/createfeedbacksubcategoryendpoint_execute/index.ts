import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createfeedbacksubcategoryendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/feedback-subcategories",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "categoryId": "categoryId",
      "forEvaluation": "forEvaluation"
    }
  },
  inputParamsSchema
}

export default tool