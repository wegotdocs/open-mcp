import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_permissions_partial_update",
  "toolDescription": "Patch a permission object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/permissions/{id}/",
  "method": "patch",
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
      "name": "name",
      "description": "description",
      "enabled": "enabled",
      "object_types": "object_types",
      "actions": "actions",
      "constraints": "constraints",
      "groups": "groups",
      "users": "users"
    }
  },
  inputParamsSchema
}

export default tool