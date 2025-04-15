import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "inviteusertoteam",
  "toolDescription": "Invite a user",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/teams/{teamId}/members",
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
      "uid": "uid",
      "email": "email",
      "role": "role",
      "projects": "projects"
    }
  },
  inputParamsSchema
}

export default tool