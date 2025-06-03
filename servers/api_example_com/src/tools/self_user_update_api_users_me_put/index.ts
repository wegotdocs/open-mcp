import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "self_user_update_api_users_me_put",
  "toolDescription": "Self User Update",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/me",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "first_name": "first_name",
      "last_name": "last_name",
      "login": "login",
      "phone_number": "phone_number"
    }
  },
  inputParamsSchema
}

export default tool