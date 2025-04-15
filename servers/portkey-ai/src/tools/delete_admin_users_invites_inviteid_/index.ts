import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_users_invites_inviteid_",
  "toolDescription": "Delete Invite By ID",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/admin/users/invites/{inviteId}",
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
      "inviteId": "inviteId"
    }
  },
  inputParamsSchema
}

export default tool