import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invites_create",
  "toolDescription": "Invite User",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/admin/users/invites",
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
    "body": {
      "email": "email",
      "workspaces": "workspaces",
      "role": "role",
      "workspace_api_key_details": "workspace_api_key_details"
    }
  },
  inputParamsSchema
}

export default tool