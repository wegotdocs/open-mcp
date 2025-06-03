import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_api_users_user_id_put",
  "toolDescription": "Update",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/{user_id}",
  "method": "put",
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
      "user_id": "user_id"
    },
    "body": {
      "first_name": "first_name",
      "last_name": "last_name",
      "login": "login",
      "is_mobile": "is_mobile",
      "phone_number": "phone_number",
      "type": "type",
      "organization_id": "organization_id"
    }
  },
  inputParamsSchema
}

export default tool