import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "login",
  "toolDescription": "[登录]密码登录",
  "baseUrl": "http://localhost:2025",
  "path": "/v1/oauth2/login",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "username": "username",
      "password": "password",
      "grantType": "grantType"
    }
  },
  inputParamsSchema
}

export default tool