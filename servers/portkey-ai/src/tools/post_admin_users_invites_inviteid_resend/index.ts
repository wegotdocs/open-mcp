import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_users_invites_inviteid_resend",
  "toolDescription": "Resend Invite",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/admin/users/invites/{inviteId}/resend",
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
      "inviteId": "inviteId"
    }
  },
  inputParamsSchema
}

export default tool