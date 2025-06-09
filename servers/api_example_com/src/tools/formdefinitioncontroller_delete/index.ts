import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formdefinitioncontroller_delete",
  "toolDescription": "Deactivate forms when workflow is deleted.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/definitions/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "userId": "userId",
      "formType": "formType"
    },
    "header": {
      "ntx-correlation-id": "ntx-correlation-id"
    }
  },
  inputParamsSchema
}

export default tool