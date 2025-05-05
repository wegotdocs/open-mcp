import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "login",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/login",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "user": "user",
      "password": "password",
      "organisation": "organisation",
      "code": "code"
    }
  },
  inputParamsSchema
}

export default tool