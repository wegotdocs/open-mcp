import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_existing_notifications_in_batch",
  "toolDescription": "Update existing notifications in batch",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/notifications/batch",
  "method": "put",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "customer": "customer",
      "notifications": "notifications"
    }
  },
  inputParamsSchema
}

export default tool