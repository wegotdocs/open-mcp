import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "loginuser",
  "toolDescription": "Login",
  "baseUrl": "https://fakestoreapi.com",
  "path": "/auth/login",
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