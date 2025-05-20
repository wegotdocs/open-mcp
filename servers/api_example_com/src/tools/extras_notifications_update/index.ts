import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_notifications_update",
  "toolDescription": "Put a notification object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/notifications/{id}/",
  "method": "put",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "object_type": "object_type",
      "object_id": "object_id",
      "user": "user",
      "read": "read",
      "event_type": "event_type"
    }
  },
  inputParamsSchema
}

export default tool