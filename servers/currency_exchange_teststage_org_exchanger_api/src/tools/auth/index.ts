import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "auth",
  "toolDescription": "Authenticate user",
  "baseUrl": "http://currency-exchange.teststage.org/exchanger/api",
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