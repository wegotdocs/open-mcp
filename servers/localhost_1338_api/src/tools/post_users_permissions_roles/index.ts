import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_users_permissions_roles",
  "toolDescription": "Create a role",
  "baseUrl": "http://localhost:1338/api",
  "path": "/users-permissions/roles",
  "method": "post",
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
      "name": "name",
      "description": "description",
      "type": "type",
      "permissions": "permissions"
    }
  },
  inputParamsSchema
}

export default tool