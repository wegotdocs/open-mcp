import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listfeedbacksubcategoriesendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/feedback-subcategories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "categoryId": "categoryId",
      "forEvaluation": "forEvaluation"
    }
  },
  inputParamsSchema
}

export default tool