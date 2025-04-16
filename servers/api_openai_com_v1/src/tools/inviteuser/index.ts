import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "inviteuser",
  "toolDescription": "Create an invite for a user to the organization. The invite must be accepted by the user before they have access to the organization.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/invites",
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
      "email": "email",
      "role": "role",
      "projects": "projects"
    }
  },
  inputParamsSchema
}

export default tool