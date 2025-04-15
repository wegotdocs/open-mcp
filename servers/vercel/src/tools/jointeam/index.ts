import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "jointeam",
  "toolDescription": "Join a team",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/teams/{teamId}/members/teams/join",
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
      "inviteCode": "inviteCode"
    }
  },
  inputParamsSchema
}

export default tool