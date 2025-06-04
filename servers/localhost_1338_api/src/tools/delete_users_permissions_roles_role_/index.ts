import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_users_permissions_roles_role_",
  "toolDescription": "Delete a role",
  "baseUrl": "http://localhost:1338/api",
  "path": "/users-permissions/roles/{role}",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool