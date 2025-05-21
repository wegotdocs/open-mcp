import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "signinadminendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/auth/admin/login",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "email": "email",
      "username": "username",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool