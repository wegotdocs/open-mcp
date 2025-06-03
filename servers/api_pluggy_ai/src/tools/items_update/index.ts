import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "items_update",
  "toolDescription": "Update",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/items/{id}",
  "method": "patch",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "parameters": "parameters",
      "clientUserId": "clientUserId",
      "webhookUrl": "webhookUrl",
      "products": "products"
    }
  },
  inputParamsSchema
}

export default tool