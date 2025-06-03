import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "login_api_auth_login_post",
  "toolDescription": "Login",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/login",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "login": "login",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool