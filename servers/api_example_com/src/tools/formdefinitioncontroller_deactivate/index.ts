import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formdefinitioncontroller_deactivate",
  "toolDescription": "Deactivate forms when workflow is paused.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/definitions/{id}/deactivate",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "userId": "userId",
      "formType": "formType"
    }
  },
  inputParamsSchema
}

export default tool