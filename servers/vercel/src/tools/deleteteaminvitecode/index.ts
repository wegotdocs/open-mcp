import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteteaminvitecode",
  "toolDescription": "Delete a Team invite code",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/teams/{teamId}/invites/{inviteId}",
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
      "inviteId": "inviteId"
    }
  },
  inputParamsSchema
}

export default tool