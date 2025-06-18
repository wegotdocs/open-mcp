import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "register_api_v1_auth_register_post",
  "toolDescription": "Register",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/auth/register",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "email": "email",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool