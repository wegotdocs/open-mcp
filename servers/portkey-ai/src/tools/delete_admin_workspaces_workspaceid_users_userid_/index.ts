import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_workspaces_workspaceid_users_userid_",
  "toolDescription": "Remove workspace member",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/admin/workspaces/{workspaceId}/users/{userId}",
  "method": "delete",
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
      "workspaceId": "workspaceId",
      "userId": "userId"
    }
  },
  inputParamsSchema
}

export default tool