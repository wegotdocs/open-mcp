import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "register_api_auth_register_post",
  "toolDescription": "Register",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/register",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "first_name": "first_name",
      "last_name": "last_name",
      "login": "login",
      "phone_number": "phone_number",
      "password": "password",
      "repeat_password": "repeat_password"
    }
  },
  inputParamsSchema
}

export default tool