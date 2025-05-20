import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_permissions_create",
  "toolDescription": "Post a list of permission objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/permissions/",
  "method": "post",
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