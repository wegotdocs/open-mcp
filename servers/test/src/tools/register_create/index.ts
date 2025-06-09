import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "register_create",
  "toolDescription": "რეგისტრაცია",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/auth/register",
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
      "name": "name",
      "last_name": "last_name",
      "user_name": "user_name",
      "personal_number": "personal_number",
      "cityzen": "cityzen",
      "mobile": "mobile",
      "birth_day": "birth_day",
      "email": "email",
      "password": "password",
      "password_confirmation": "password_confirmation"
    }
  },
  inputParamsSchema
}

export default tool