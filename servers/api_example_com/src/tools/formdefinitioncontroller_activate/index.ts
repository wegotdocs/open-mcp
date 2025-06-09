import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formdefinitioncontroller_activate",
  "toolDescription": "Activate the deleted/paused form",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/definitions/{id}/activate",
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