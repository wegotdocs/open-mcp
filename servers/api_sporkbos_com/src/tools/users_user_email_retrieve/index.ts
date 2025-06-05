import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_user_email_retrieve",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/users/user-email/",
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
    "query": {
      "email": "email",
      "is_team_form": "is_team_form"
    }
  },
  inputParamsSchema
}

export default tool