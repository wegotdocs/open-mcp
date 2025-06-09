import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formdefinitioncontroller_deletedraft",
  "toolDescription": "Delete draft form definition.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/definitions/{id}/draft",
  "method": "delete",
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