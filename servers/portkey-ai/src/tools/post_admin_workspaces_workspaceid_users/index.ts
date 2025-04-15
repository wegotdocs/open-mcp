import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_workspaces_workspaceid_users",
  "toolDescription": "Add workspace member",
  "baseUrl": "https://api.portkey.ai",
  "path": "/admin/workspaces/{workspaceId}/users",
  "method": "post",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "workspaceId": "workspaceId"
    },
    "body": {
      "users": "users"
    }
  },
  inputParamsSchema
}

export default tool