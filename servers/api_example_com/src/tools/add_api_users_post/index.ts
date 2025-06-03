import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_api_users_post",
  "toolDescription": "Add",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/",
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
      "first_name": "first_name",
      "last_name": "last_name",
      "login": "login",
      "phone_number": "phone_number",
      "is_mobile": "is_mobile",
      "type": "type",
      "organization_id": "organization_id",
      "password": "password",
      "repeat_password": "repeat_password"
    }
  },
  inputParamsSchema
}

export default tool