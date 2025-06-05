import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_bulk_update_message_preferences_partial_update",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/users/bulk-update-message-preferences/",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "user_preferences": "user_preferences"
    }
  },
  inputParamsSchema
}

export default tool