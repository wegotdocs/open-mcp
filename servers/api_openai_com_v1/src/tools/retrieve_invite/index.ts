import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieve_invite",
  "toolDescription": "Retrieves an invite.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/invites/{invite_id}",
  "method": "get",
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