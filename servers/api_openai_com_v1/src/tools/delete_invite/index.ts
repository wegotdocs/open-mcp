import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_invite",
  "toolDescription": "Delete an invite. If the invite has already been accepted, it cannot be deleted.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/invites/{invite_id}",
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
      "invite_id": "invite_id"
    }
  },
  inputParamsSchema
}

export default tool