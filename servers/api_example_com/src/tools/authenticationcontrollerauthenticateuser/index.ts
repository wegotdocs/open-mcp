import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "authenticationcontrollerauthenticateuser",
  "toolDescription": "User login",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/login",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "username": "username",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool