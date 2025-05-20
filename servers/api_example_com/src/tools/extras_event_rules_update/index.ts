import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_event_rules_update",
  "toolDescription": "Put a event rule object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/event-rules/{id}/",
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
      "object_types": "object_types",
      "name": "name",
      "enabled": "enabled",
      "event_types": "event_types",
      "conditions": "conditions",
      "action_type": "action_type",
      "action_object_type": "action_object_type",
      "action_object_id": "action_object_id",
      "description": "description",
      "custom_fields": "custom_fields",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool