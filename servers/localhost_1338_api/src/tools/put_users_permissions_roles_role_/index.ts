import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_users_permissions_roles_role_",
  "toolDescription": "Update a role",
  "baseUrl": "http://localhost:1338/api",
  "path": "/users-permissions/roles/{role}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "role": "role"
    },
    "body": {
      "name": "name",
      "description": "description",
      "type": "type",
      "permissions": "permissions"
    }
  },
  inputParamsSchema
}

export default tool